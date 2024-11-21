const Billing = require('../models/billingModel');

// Billing or insurance data
exports.addBilling = async (req, res) => {
  try {
    const { name, contact, doctorName, expenditure, type } = req.body;
    const newBilling = new Billing({ name, contact, doctorName, expenditure, type });
    await newBilling.save();
    res.status(201).json({ message: 'Data added successfully', data: newBilling });
  } catch (error) {
    res.status(500).json({ message: 'Error adding data', error: error.message });
  }
};

// Fetch the expenditure - name
exports.getLatestExpenditureByName = async (req, res) => {
  try {
    const { name } = req.query; // Extract the name 
    const latestEntry = await Billing.findOne({ name: name, type: 'billing' })
      .sort({ _id: -1 })
      .exec();

    if (latestEntry) {
      res.status(200).json({ expenditure: latestEntry.expenditure });
    } else {
      res.status(404).json({ message: 'No user found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching latest expenditure', error: error.message });
  }
};
