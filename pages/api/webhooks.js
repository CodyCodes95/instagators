import Stripe from "stripe"
import { buffer } from "micro"

export const config = {
    api: {
        bodyParser: false,
    }
}

const webhookHandler = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET)
    if (req.method === "POST") {
        const buf = await buffer(req)
        const sig = req.headers["stripe-signature"]
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

        let event

        try {
            if (!sig || !webhookHandler) return

            event = stripe.webhooks.constructEvent(buf, sig, webhookSecret)
        } catch (error) {
            console.error(`Webhook error: ${error.message}`)
            return res.status(400).send(`Webhook error: ${error.message}`)
        }
        console.log("event", event)

        res.status(200).send();
    }
}

export default webhookHandler