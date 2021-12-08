const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const trasactionSchema = mongoose.Schema({
  transaction_id: { type: String, required: true },
  customer_name: { type: String, required: true },
  customer_code: { type: String, required: true },
  transaction_amount: String,
  transaction_discount: String,
  transaction_additional_field: String,
  transaction_payment_type: String,
  transaction_state: String,
  transaction_code: String,
  transaction_order: { type: Number, required: true, minimum: 1, maximum: 10 },
  location_id: String,
  organization_id: Number,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  transaction_payment_type_name: String,
  transaction_cash_amount: { type: Number, required: true, minimum: 1 },
  transaction_cash_change: Number,
  customer_attribute: Schema.Types.Mixed,
  connote: Schema.Types.Mixed,
  connote_id: String,
  origin_data: Schema.Types.Mixed,
  destination_data: Schema.Types.Mixed,
  koli_data: Array,
  custom_field: Schema.Types.Mixed,
  currentLocation: Schema.Types.Mixed,
});

module.exports = mongoose.model("Transaction", trasactionSchema);
