const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentInfo: { type: String, default: "" },
    transactionid: { type: String },
    products: { type: Object, required: true },
    address: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "Initiated", required: true },
    deliveryStatus: { type: String, default: "unshipped", required: true },
  },
  { timeStamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
