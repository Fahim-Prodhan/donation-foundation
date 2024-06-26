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
    end_date:{
        type: Date,
        require:true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed','active'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription
