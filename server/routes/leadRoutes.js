const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

// GET all leads
router.get("/", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// CREATE lead
router.post("/", async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// UPDATE lead status
router.put("/:id", async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updatedLead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// DELETE lead
router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;