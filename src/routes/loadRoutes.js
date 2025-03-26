const express = require("express");
const {
  createLoad,
  getLoad,
  getLoadById,
  updateLoadById,
  deleteLoadById,
} = require("../controllers/laodController");

// 1. POST /load
const router = express.Router();

router.post("/load", createLoad);

// 2. GET /load
router.get("/load", getLoad);

// 3. GET /load/:loadId
router.get("/load/:loadId", getLoadById);

// 4. PUT /load/:loadId
router.put("/load/:loadId", updateLoadById);

// 5. DELETE /load/:loadId
router.delete("/load/:loadId", deleteLoadById);

module.exports = router;
