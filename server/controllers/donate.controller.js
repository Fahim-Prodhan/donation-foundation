import Stripe from 'stripe';
import Donate from '../models/donate.model.js';
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: "fundaprotan.official@gmail.com", 
      pass: "bybi iykl dygx kvth", 
    },
  });

export const getCheckoutSession = async (req, res) => {
    const user = req.user;
    const { amount, email, firstName, lastName } = req.body;

    try {
        const items = [{
            price_data: {
                currency: "usd",
                product_data: {
                    name: `Donation by ${firstName} ${lastName}`,
                    images: ['https://i.ibb.co/vXhdDHV/6-Logo-Verde.png'],
                },
                unit_amount: amount * 100,
            },
            quantity: 1,
        }];

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/`,
            line_items: items,
            customer_email: email
        });

        const donate = new Donate({
            user: user._id,
            amount: amount,
            sessionId: session.id,
            status: 'pending'
        });

        await donate.save();

        res.json({ session });
    } catch (error) {
        console.log("Error in getCheckoutSession: ", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const handleSuccess = async (req, res) => {
    const sessionId = req.body.transactionId;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        const donate = await Donate.findOne({ sessionId: sessionId }).populate('user');

        
        if (!donate) {
            return res.status(404).send('Donate not found');
        }
        
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        const paymentId = session.payment_intent;

        donate.paymentId = paymentId;
        donate.status = 'completed';
        await donate.save();
        console.log(donate);
        const emailContent = `
            Dear ${donate.user.firstName} ${donate.user.lastName},

            Thank you for your generous donation of $${donate.amount.toFixed(2)} made on ${new Date().toLocaleDateString()}. Your payment ID is: ${paymentId}.

            We sincerely appreciate your support.

            Best regards,
            FUNDAPROTAN
        `;
        await transporter.sendMail({
            from: "fundaprotan.official@gmail.com",
            to: donate.user.email,
            subject: "Donation Confirmation",
            text: emailContent,
        });
        
        res.send({ paymentId});
    } catch (error) {
        console.error('Error handling success:', error);
        res.status(500).send('Error handling success');
    }
};
