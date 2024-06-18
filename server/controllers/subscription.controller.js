import { MercadoPagoConfig, PreApprovalPlan } from "mercadopago";

export const createSubscription = async (req, res) => {
  try {
    // Initialize Mercado Pago client
    const client = new MercadoPagoConfig({
      accessToken: `${process.env.MERCADO_SECRET_KEY}`,
      options: { timeout: 5000 },
    });

    // Initialize PreApprovalPlan instance
    const preApprovalPlan = new PreApprovalPlan(client);

    // Create the subscription plan
    const createPlanResponse = await preApprovalPlan.create({
      body: {
        back_url: `https://donation-foundation.onrender.com/confirm-subscription`,
        reason: "Monthly Donation",
        auto_recurring: {
          currency_id: "COP",
          transaction_amount: 1742,
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

    // Send success response
    res
      .status(200)
      .json({
        message: "Subscription plan created successfully",
        data: createPlanResponse,
      });
  } catch (error) {
    // Log the error for debugging
    console.error("Error creating subscription plan:", error);

    // Send error response
    res
      .status(500)
      .json({
        error: "Failed to create subscription plan",
        message: error.message,
      });
  }
};
