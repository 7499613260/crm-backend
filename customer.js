const router = require("express").Router();
const Customer = require("../models/Customer");

// Add customer
router.post("/", async (req,res)=>{
    const data = new Customer(req.body);
    await data.save();
    res.send(data);
});

// Get all customers
router.get("/", async (req,res)=>{
    const data = await Customer.find();
    res.send(data);
});

// Delete customer
router.delete("/:id", async (req,res)=>{
    await Customer.findByIdAndDelete(req.params.id);
    res.send("Deleted");
});

module.exports = router;
