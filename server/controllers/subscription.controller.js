import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res) => {
  const user = req.user;
  const { amount } = req.body;

  try {
    const id = await Subscription.findOne({ user: user._id });
    console.log(id);
    if (id && id.status === 'active') {
      res.send({ message: "user is already subscribed" });
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
      user: user._id,
      amount: amount,
      status: "pending",
    });

    const callBackUrl = `https://donation-foundation.onrender.com/confirm-subscription`;

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
          end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString(),
        }
      },
    });

    // Log the response to console for debugging
    console.log("Subscription plan created:", createPlanResponse);

    subscription.preApprovalPlanId = createPlanResponse.id;
    subscription.end_date = new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString();
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

export const handleConfirmSubscription = async (req, res) => {
  const preapprovalId = req.body.preapprovalId;
  
  try {
    const subscription = await Subscription.findOne({ preApprovalPlanId: preapprovalId }).populate(
      "user"
    );

    if (!subscription) {
      return res.status(404).send("subscription not found");
    }
    subscription.status = "active";
    await subscription.save();
    res.send({ preapprovalId });

  }catch (error) {
    console.error("Error handling confirm subscription:", error);
    res.status(500).send("Error handling confirm subscription");
  }

};
