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
  let emailContent = `
  <div style="text-align: center; color: #333; font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 800px; margin: auto; background-color: #e9f3f6; padding: 40px 0;">
    <h1 style="color: #1a2930; font-size: 2.5em; margin-bottom: 1em;">Order Confirmation</h1>

    <div style="background-color: #ffffff; border-radius: 15px; padding: 30px; margin: 20px auto; box-shadow: 0 0 15px rgba(0,0,0,0.1);">
      <p style="font-size: 1.4em; color: #4c737a;">Hello, ${metadata.customer_name.split(" ")[0]}!</p>
      <p style="font-size: 1.3em; color: #4c737a; margin-bottom: 20px;">Thank you for your order with PromptFinder.</p>

      <div style="display: grid; grid-template-columns: 1fr; gap: 20px;">`;

  for (let key in metadata) {
    if (metadata.hasOwnProperty(key) && key.startsWith('sample')) {
      emailContent += `
        <div style="border-radius: 10px; background-color: #1a2930; padding: 15px; box-shadow: 0 0 15px rgba(0,0,0,0.1); overflow-wrap: break-word;">
          <h3 style="color: #d1e8ea; margin-top: 0; font-size: 1.4em;">${key}</h3>
          <p style="color: #d1e8ea; font-size: 1.2em;">${metadata[key]}</p>
        </div>`;
    }
  }

  emailContent += `
      </div>
      <p style="font-size: 1.3em; color: #4c737a; margin-top: 20px;">Our representative, Gautam, will be in touch with you via this email thread. Expect your Prompt within the next 7 days.</p>
    </div>

    <p style="font-size: 1.2em; color: #4c737a;">Warm Regards,</p>
    <p style="font-size: 1.2em; color: #4c737a;">The PromptFinder Team</p>
  </div>`;

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