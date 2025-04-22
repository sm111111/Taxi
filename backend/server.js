import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import customerRoutes from './routes/customerRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


const __dirname = path.resolve();


const filePath = path.resolve(__dirname, './datas.json');
let data = {};

try {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(rawData);
} catch (error) {
    console.error("❌ Failed to read or parse datas.json:", error);
}

const { checkYourTravel = [], meetOurCars = [], testimonials = [], blog = [], luxurycars = [], Localcars = [], passengers = [] } = data;

app.get("/api/travelers", (req, res) => res.json(checkYourTravel));
app.get("/api/cars", (req, res) => res.json(meetOurCars));
app.get("/api/testimonials", (req, res) => res.json(testimonials));
app.get("/api/blogs", (req, res) => res.json(blog));
app.get("/api/local", (req, res) => res.json(Localcars));
app.get("/api/luxary", (req, res) => res.json(luxurycars));
app.get("/api/history", (req, res) => res.json(passengers));


app.use('/api/customerData', customerRoutes);
app.use("/api/contact", contactRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
