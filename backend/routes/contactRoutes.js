import express from 'express';
import fs from 'fs';

const router = express.Router();
const filePath = './clint.json';

let clintData = [];

try {
    const contactData = fs.readFileSync(filePath, 'utf-8');
    clintData = contactData ? JSON.parse(contactData).clintData : [];
} catch (error) {
    console.error("Error reading clint.json:", error);
}

router.get('/', (req, res) => {
    res.json(clintData);
});

router.post('/', (req, res) => {
    const newContact = req.body;

    if (!newContact.name || !newContact.email || !newContact.message) {
        return res.status(400).json({ message: 'Missing name, email, or message.' });
    }

    clintData.push(newContact);

    try {
        fs.writeFileSync(filePath, JSON.stringify({ clintData }, null, 2));
        res.status(200).json({ message: "Contact saved successfully." });
    } catch (err) {
        console.error("Error saving contact data:", err);
        res.status(500).json({ message: "Failed to save contact data." });
    }
});

export default router;
