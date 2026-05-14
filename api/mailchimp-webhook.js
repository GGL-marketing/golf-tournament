import Stripe from 'stripe'
import { buffer } from 'micro'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const stripe = new Stripe(process.env.STRIPE_RESTRICTED_KEY, {
    apiVersion: '2023-10-16'
  })

  const sig = req.headers['stripe-signature']
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const rawBody = await buffer(req)

  let event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret)
  } catch (err) {
    return res.status(400).json({ error: `Webhook error: ${err.message}` })
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object
    const { full_name, email, handicap, division, home_club_name } = paymentIntent.metadata

    if (!email) {
      return res.status(400).json({ error: 'No email in metadata' })
    }

    const nameParts = full_name ? full_name.split(' ') : ['', '']
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    const memberData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        HANDICAP: handicap || '',
        HOMECLUB: home_club_name || '',
        DIVISION: division || '',
      },
      tags: [division, 'GGL 2025'].filter(Boolean)
    }

    const mcResponse = await fetch(
      `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(memberData),
      }
    )

    const mcResult = await mcResponse.json()

    if (mcResponse.status >= 400 && mcResult.title !== 'Member Exists') {
      return res.status(500).json({ error: mcResult.detail })
    }

    if (mcResult.title === 'Member Exists') {
      const emailHash = Buffer.from(email.toLowerCase()).toString('hex')
      await fetch(
        `https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members/${emailHash}/tags`,
        {
          method: 'POST',
          headers: {
            Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tags: [
              { name: division, status: 'active' },
              { name: 'GGL 2025', status: 'active' }
            ]
          }),
        }
      )
    }
  }

  res.status(200).json({ received: true })
}