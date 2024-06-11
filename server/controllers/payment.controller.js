import { Preference } from "mercadopago";
import { MercadoPagoConfig } from "mercadopago";

export const createPayment = async (req, res) => {
    try {
        // Initialize Mercado Pago client with the provided access token
        const client = new MercadoPagoConfig({
            accessToken: 'TEST-209959251788759-060915-da341f5978a5c5033d2ec4a3877361cd-217118838',
            options: {
                timeout: 5000,
                idempotencyKey: 'abc'
            }
        });

        // Create a new preference
        const preference = new Preference(client);

        // Set the preference data
        const preferenceData = {
            items: [
                {
                    title: 'Donation',
                    description: 'donated by someone',
                    quantity: 1,
                    unit_price: 1,  // Ensure unit price is a valid number
                    currency_id: "USD",  // Ensure currency_id is valid
                    picture_url: "https://i.ibb.co/vXhdDHV/6-Logo-Verde.png"
                }
            ]
        };

        // Create the preference
        const response = await preference.create({ body: preferenceData });

        // Handle the response
        console.log(response);

        // Send the response to the client
        res.status(201).json(response);
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
