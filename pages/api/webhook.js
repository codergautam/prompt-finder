import { buffer } from "micro";
import Stripe from "stripe";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

function generateAlphanumericString() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateEmail(metadata) {
  let emailContent = `<h1>Order Confirmation</h1>`;
  emailContent += `<p>Dear ${metadata.customer_name.split(" ")[0]},</p>`;
  emailContent += `<p>Thank you for your order of a Prompt. Here are the details you requested:</p>`;
  emailContent += `<ul>`;
  for (let key in metadata) {
    if (metadata.hasOwnProperty(key) && key.startsWith('sample')) {
      emailContent += `<li><strong>${key}:</strong> ${metadata[key]}</li>`;
    }
  }
  emailContent += `</ul>`;
  emailContent += `<p>We have connected you with Gautam, who will help build & receive your Prompt within 7 days.</p>`;
  emailContent += `<p>Best Regards,</p>`;
  emailContent += `<p>PromptFinder team</p>`;
  return emailContent;
}



const handler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      if(event.type !== "checkout.session.completed") return res.status(200).send("Success");
      let metadata = event.data.object.metadata;
      const customer_details = event.data.object.customer_details;
      if(!customer_details) return res.status(400).send("Bad req");
      metadata.customer_name = customer_details.name;
      metadata.customer_email = customer_details.email;


      // Send an email using resend
      try {
        const data = await resend.emails.send({
          from: 'PromptFinder <orders@promptfinder.in>',
          to: [metadata.customer_email, 'gautam@codergautam.dev'],
          subject: 'RE: Your Prompt Order #'+generateAlphanumericString(),
          html: generateEmail(metadata),
        });

        console.log(data);
      } catch (error) {
        console.error(error);
      }

      res.status(200).send("Success");
      return;
    } catch (err) {
      console.log("Error:", err.message);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;