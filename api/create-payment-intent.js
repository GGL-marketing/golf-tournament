import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const stripe = new Stripe(process.env.STRIPE_RESTRICTED_KEY, {
    apiVersion: '2023-10-16'
  })

  const { amount, metadata } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'zar',
      payment_method_types: ['card'],
      metadata: metadata,
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}