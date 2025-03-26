const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

// Load Schema
const loadSchema = new mongoose.Schema({
  loadId: { type: String, default: () => `load:${uuidv4()}` },
  facility: {
    loadingPoint: String,
    unloadingPoint: String,
    loadingDate: String,
    unloadingDate: String,
  },
  productType: String,
  truckType: String,
  noOfTrucks: Number,
  weight: Number,
  comment: String,
  shipperId: String,
  date: String,
});

module.exports = mongoose.model("Load", loadSchema);
