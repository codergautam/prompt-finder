const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    let metadata = {
      promptDescription: req.body.description,
      sampleInput1: req.body.sampleInput1,
      sampleInput2: req.body.sampleInput2,
      sampleInput3: req.body.sampleInput3,
      sampleInput4: req.body.sampleInput4,
      sampleInput5: req.body.sampleInput5,
      sampleOutput1: req.body.sampleOutput1,
      sampleOutput2: req.body.sampleOutput2,
      sampleOutput3: req.body.sampleOutput3,
      sampleOutput4: req.body.sampleOutput4,
      sampleOutput5: req.body.sampleOutput5,
    };
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1KwvgGCpQHNfNfw7FcDnSyWi',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/buyComplete?success=true`,
        cancel_url: `${req.headers.origin}/`,

        payment_intent_data: {
        metadata,
        },
        metadata,
        automatic_tax: {enabled: true},
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}