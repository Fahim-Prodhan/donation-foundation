import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    preApprovalPlanId: {
        type: String,
        required: true,
        unique: true,
    },
    preferenceId: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription
