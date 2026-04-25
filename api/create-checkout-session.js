import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const PRICE_IDS = {
  'Division 1': process.env.STRIPE_DIV1_PRICE_ID,
  'Division 2': process.env.STRIPE_DIV2_PRICE_ID,
  'Division 3': process.env.STRIPE_DIV3_PRICE_ID,
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { division, registrationId, email } = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: email,
      line_items: [{ price: PRICE_IDS[division], quantity: 1 }],
      metadata: { registrationId },
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}