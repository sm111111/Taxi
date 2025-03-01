import express from 'express';
import fs from 'fs';

const router = express.Router();
const filePath = './clint.json';

let clintData = [];

try {
    const customerData = fs.readFileSync(filePath, 'utf-8');
    clintData = customerData ? JSON.parse(customerData).clintData : [];
} catch (error) {
    console.error("Error reading clint.json:", error);
}

router.get('/', (req, res) => {
    res.json(clintData);
});

router.post('/', (req, res) => {
    const newContact = req.body;

    if (!newContact.name || !newContact.email || !newContact.message) {
        return res.status(400).json({ message: 'Missing required fields (name, email, message).' });
    }

    clintData.push(newContact);

    try {
        fs.writeFileSync(filePath, JSON.stringify({ clintData }, null, 2));
        return res.status(200).json({ message: "Contact data saved successfully." });
    } catch (err) {
        console.error("Error saving contact data:", err);
        return res.status(500).json({ message: "Error saving contact data." });
    }
});

export default router;
