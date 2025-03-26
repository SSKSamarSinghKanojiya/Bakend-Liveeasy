const Load = require("../models/load");


const createLoad = async (req, res) => {
  try {
    const newLoad = new Load(req.body);

    await newLoad.save();
    res.status(201).json(newLoad);
  } catch (error) {
    console.log(error);
    
    res.status(400).json({ error: error.message });
  }
};


const getLoad = async (req, res) => {
  try {
    const filters = req.query;
    const loads = await Load.find(filters);
    res.status(200).json(loads);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const getLoadById = async (req, res) => {
  try {
    const load = await Load.findOne({ loadId: req.params.loadId });
    if (!load) return res.status(404).json({ error: "Load not found" });
    res.status(200).json(load);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const updateLoadById = async (req, res) => {
  try {
    const updatedLoad = await Load.findOneAndUpdate(
      { loadId: req.params.loadId },
      req.body,
      { new: true }
    );
    if (!updatedLoad) return res.status(404).json({ error: "Load not found" });
    res.status(200).json(updatedLoad);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const deleteLoadById = async (req, res) => {
  try {
    const deletedLoad = await Load.findOneAndDelete({
      loadId: req.params.loadId,
    });
    if (!deletedLoad) return res.status(404).json({ error: "Load not found" });
    res.status(200).json({ message: "Load deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createLoad,
  getLoad,
  getLoadById,
  updateLoadById,
  deleteLoadById,
};



