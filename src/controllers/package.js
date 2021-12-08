const transactionModel = require("../models/transaction");

module.exports = {
  get: async (req, res) => {
    try {
      const transactions = await transactionModel.find();
      res.json({
        status: 200,
        success: true,
        totalData: transactions.length,
        data: transactions,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "Gagal Menampilkan data",
        errorMessage: error.message,
      });
    }
  },
  getById: async (req, res) => {
    const id = req.params.id;
    try {
      const transaction = await transactionModel.findById(id);
      res.json({
        status: 200,
        success: true,
        data: transaction,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "Gagal Menampilkan data",
        errorMessage: error.message,
      });
    }
  },
  post: async (req, res) => {
    const transaction_id = req.body.transaction_id || null;
    const customer_name = req.body.customer_name || null;
    const customer_code = req.body.customer_code || null;
    const transaction_amount = req.body.transaction_amount || null;
    const transaction_discount = req.body.transaction_discount || null;
    const transaction_additional_field =
      req.body.transaction_additional_field || null;
    const transaction_payment_type = req.body.transaction_payment_type || null;
    const transaction_state = req.body.transaction_state || null;
    const transaction_code = req.body.transaction_code || null;
    const transaction_order = req.body.transaction_order || null;
    const location_id = req.body.location_id || null;
    const organization_id = req.body.organization_id || null;
    const created_at = req.body.created_at || null;
    const updated_at = req.body.updated_at || null;
    const transaction_payment_type_name =
      req.body.transaction_payment_type_name || null;
    const transaction_cash_amount = req.body.transaction_cash_amount || null;
    const transaction_cash_change = req.body.transaction_cash_change || null;
    const customer_attribute = req.body.customer_attribute || null;
    const connote = req.body.connote || null;
    const connote_id = req.body.connote_id || null;
    const origin_data = req.body.origin_data || null;
    const destination_data = req.body.destination_data || null;
    const koli_data = req.body.koli_data || null;
    const custom_field = req.body.custom_field || null;
    const currentLocation = req.body.currentLocation || null;

    const transaction = new transactionModel({
      transaction_id,
      customer_name,
      customer_code,
      transaction_amount,
      transaction_discount,
      transaction_additional_field,
      transaction_payment_type,
      transaction_state,
      transaction_code,
      transaction_order,
      location_id,
      organization_id,
      created_at,
      updated_at,
      transaction_payment_type_name,
      transaction_cash_amount,
      transaction_cash_change,
      customer_attribute,
      connote,
      connote_id,
      origin_data,
      destination_data,
      koli_data,
      custom_field,
      currentLocation,
    });

    try {
      const resultTransaction = await transaction.save();
      res.json({
        status: 200,
        success: true,
        data: resultTransaction,
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "Gagal Menambahkan data",
        errorMessage: error.message,
      });
    }
  },
  put: async (req, res) => {
    const id = req.params.id;

    const transaction_id = req.body.transaction_id || null;
    const customer_name = req.body.customer_name || null;
    const customer_code = req.body.customer_code || null;
    const transaction_amount = req.body.transaction_amount || null;
    const transaction_discount = req.body.transaction_discount || null;
    const transaction_additional_field =
      req.body.transaction_additional_field || null;
    const transaction_payment_type = req.body.transaction_payment_type || null;
    const transaction_state = req.body.transaction_state || null;
    const transaction_code = req.body.transaction_code || null;
    const transaction_order = req.body.transaction_order || null;
    const location_id = req.body.location_id || null;
    const organization_id = req.body.organization_id || null;
    const created_at = req.body.created_at || null;
    const updated_at = req.body.updated_at || null;
    const transaction_payment_type_name =
      req.body.transaction_payment_type_name || null;
    const transaction_cash_amount = req.body.transaction_cash_amount || null;
    const transaction_cash_change = req.body.transaction_cash_change || null;
    const customer_attribute = req.body.customer_attribute || null;
    const connote = req.body.connote || null;
    const connote_id = req.body.connote_id || null;
    const origin_data = req.body.origin_data || null;
    const destination_data = req.body.destination_data || null;
    const koli_data = req.body.koli_data || null;
    const custom_field = req.body.custom_field || null;
    const currentLocation = req.body.currentLocation || null;

    try {
      const resultTransaction = await transactionModel.findById(id);

      if (resultTransaction.length <= 0) {
        res.status(400).json({ message: "Data tidak ditemukan" });
      } else {
        const updateTransaction = await transactionModel.updateOne(
          { _id: id },
          {
            transaction_id,
            customer_name,
            customer_code,
            transaction_amount,
            transaction_discount,
            transaction_additional_field,
            transaction_payment_type,
            transaction_state,
            transaction_code,
            transaction_order,
            location_id,
            organization_id,
            created_at,
            updated_at,
            transaction_payment_type_name,
            transaction_cash_amount,
            transaction_cash_change,
            customer_attribute,
            connote,
            connote_id,
            origin_data,
            destination_data,
            koli_data,
            custom_field,
            currentLocation,
          }
        );
        res.json({
          status: 200,
          success: true,
          data: updateTransaction,
        });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
  patch: async (req, res) => {
    const id = req.params.id;
    const dataPatch = req.body;

    try {
      const resultTransaction = await transactionModel.findById(id);

      if (resultTransaction.length <= 0) {
        res.status(400).json({ message: "Data tidak ditemukan" });
      } else {
        const updateTransaction = await transactionModel.updateOne(
          { _id: id },
          dataPatch
        );
        res.json({
          status: 200,
          success: true,
          data: updateTransaction,
        });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  },
  delete: async (req, res) => {
    const id = req.params.id;
    try {
      const resultTransaction = await transactionModel.findById(id);

      if (resultTransaction.length <= 0) {
        res.status(400).json({
          status: 400,
          success: false,
          message: "Data tidak ditemukan",
          errorMessage: "",
        });
      } else {
        const deleteTransaction = await transactionModel.deleteOne({ _id: id });
        res.json({
          status: 200,
          success: true,
          data: deleteTransaction,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "Gagal Menambahkan data",
        errorMessage: error.message,
      });
    }
  },
};
