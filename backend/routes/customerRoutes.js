import express from 'express';
import fs from 'fs';

const router = express.Router();
const filePath = './customerData.json';

let customerData = [];

try {
    if (fs.existsSync(filePath)) {
        const customerDetails = fs.readFileSync(filePath, 'utf8');
        customerData = customerDetails ? JSON.parse(customerDetails).customerData || [] : [];
    }
} catch (error) {
    console.error("Error reading customerData.json:", error);
}

// GET all customers
router.get('/', (req, res) => {
    res.json(customerData);
});

// POST new customer
router.post('/', (req, res) => {
    const newEntry = req.body;

    if (!newEntry.fillName || !newEntry.number || !newEntry.passenger || !newEntry.pickUpDate
        || !newEntry.DropAddress || !newEntry.PaidAmount || !newEntry.pickUPAddress) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const highestId = customerData.length > 0 ? Math.max(...customerData.map(item => item.id)) : 0;
    newEntry.id = highestId + 1;

    customerData.push(newEntry);

    try {
        fs.writeFileSync(filePath, JSON.stringify({ customerData }, null, 2));
        res.status(200).json({ message: "Customer saved.", id: newEntry.id });
    } catch (error) {
        console.error("Error saving:", error);
        res.status(500).json({ message: "Error saving data." });
    }
});

// GET customer by ID
router.get('/:id', (req, res) => {
    const customer = customerData.find(entry => entry.id === parseInt(req.params.id));
    if (!customer) return res.status(404).json({ message: "Customer not found." });
    res.json(customer);
});

// DELETE customer
router.delete('/:id', (req, res) => {
    const customerId = parseInt(req.params.id);
    const index = customerData.findIndex(entry => entry.id === customerId);

    if (index === -1) return res.status(404).json({ message: "Customer not found." });

    customerData.splice(index, 1);

    customerData.forEach((entry, index) => entry.id = index + 1);

    try {
        fs.writeFileSync(filePath, JSON.stringify({ customerData }, null, 2));
        res.status(200).json({ message: "Deleted successfully." });
    } catch (error) {
        console.error("Error deleting data:", error);
        res.status(500).json({ message: "Error deleting data." });
    }
});

export default router;
