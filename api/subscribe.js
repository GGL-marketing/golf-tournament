import crypto from 'crypto'

const REGIONS = ['Johannesburg', 'Cape Town', 'KwaZulu-Natal', 'Other']

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    firstName = '',
    lastName = '',
    email = '',
    whatsapp = '',
    homeClub = '',
    region = '',
    handicap = '',
  } = req.body || {}

  const cleanEmail = String(email).trim().toLowerCase()
  const cleanWhatsapp = String(whatsapp).trim()
  const whatsappDigits = cleanWhatsapp.replace(/\D/g, '')

  if (!String(firstName).trim() || !String(lastName).trim()) {
    return res.status(400).json({ error: 'Please enter your first and last name.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }
  if (whatsappDigits.length < 9 || whatsappDigits.length > 15) {
    return res.status(400).json({ error: 'Please enter a valid WhatsApp number.' })
  }
  if (!String(homeClub).trim()) {
    return res.status(400).json({ error: 'Please enter your home golf club.' })
  }
  if (!REGIONS.includes(region)) {
    return res.status(400).json({ error: 'Please select your region.' })
  }

  const server = process.env.MAILCHIMP_SERVER_PREFIX
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const headers = {
    Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
    'Content-Type': 'application/json',
  }

  const emailHash = crypto.createHash('md5').update(cleanEmail).digest('hex')
  const memberUrl = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${emailHash}`

  const mergeFields = {
    FNAME: String(firstName).trim(),
    LNAME: String(lastName).trim(),
    WHATSAPP: cleanWhatsapp,
    HOMECLUB: String(homeClub).trim(),
    REGION: region,
  }
  if (handicap !== '' && handicap !== null) {
    mergeFields.HANDICAP = String(handicap)
  }

  const tags = ['Pre-Launch Signup', `Region: ${region}`]

  try {
    const memberRes = await fetch(memberUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        email_address: cleanEmail,
        status_if_new: 'subscribed',
        merge_fields: mergeFields,
      }),
    })

    const member = await memberRes.json()

    if (!memberRes.ok) {
      console.error('Mailchimp member error:', member)
      const unsubscribedBefore =
        member.title === 'Forgotten Email Not Subscribed' ||
        member.title === 'Member In Compliance State'

      return res.status(400).json({
        error: unsubscribedBefore
          ? 'This email was previously unsubscribed. Please contact us to rejoin the list.'
          : 'We could not sign you up right now. Please try again.',
      })
    }

    await fetch(`${memberUrl}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: tags.map((name) => ({ name, status: 'active' })),
      }),
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Subscribe error:', error)
    return res.status(500).json({ error: 'We could not sign you up right now. Please try again.' })
  }
}