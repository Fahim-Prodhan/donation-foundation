import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
  const user = req.user;
  const { amount } = req.body;

  try {

    const id = await Subscription.findOne({user:user._id})
    if(id) {
      res.send({message: 'user is already subscribed'})
      return;
    }

    // Initialize Mercado Pago client
    const client = new MercadoPagoConfig({
      accessToken: `${process.env.MERCADO_SECRET_KEY}`,
      options: { timeout: 5000 },
    });

    // Initialize PreApprovalPlan instance
    const preApprovalPlan = new PreApprovalPlan(client);

    const subscription = new Subscription({
      user:user._id,
      amount: amount,
      status: "pending",
    });

    const callBackUrl = `https://donation-foundation.onrender.com/confirm-subscription?subscriptionId=${subscription._id}`;

    // Create the subscription plan
    const createPlanResponse = await preApprovalPlan.create({
      body: {
        back_url: callBackUrl,
        reason: "Monthly Donation",
        auto_recurring: {
          currency_id: "COP",
          transaction_amount: parseFloat(amount),
          frequency: 1,
          frequency_type: "months",
          start_date: new Date().toISOString(),
          end_date: new Date(
            new Date().setFullYear(new Date().getFullYear() + 1)
          ).toISOString(),
        },
        payer_email: "fahimprodhan0@gmail.com",
      },
    });

    // Log the response to console for debugging
    console.log("Subscription plan created:", createPlanResponse);
    console.log(
      "Subscription plan created:",
      createPlanResponse.api_response.headers
    );

    subscription.preApprovalPlanId = createPlanResponse.id;
    await subscription.save();

    // Send success response
    res.status(200).json({
      message: "Subscription plan created successfully",
      data: createPlanResponse,
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating subscription plan:", error);
    // Send error response
    res.status(500).json({
      error: "Failed to create subscription plan",
      message: error.message,
    });
  }
};

export const handleConfirmSubscription = async (req, res) => {};
