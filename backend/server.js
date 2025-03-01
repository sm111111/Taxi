import express from 'express';
import cors from 'cors';
import fs from 'fs';
const app = express();
import contactRoutes from './routes/contactRoutes.js';
import customerRoutes from './routes/customerRoutes.js'


app.use(express.json());
app.use(cors());


const rawData = fs.readFileSync('./data.json');
const data = JSON.parse(rawData);
const { checkYourTravel, meetOurCars, testimonials, blog, luxurycars, Localcars, passengers } = data;






app.get("/api/travelers", (req, res) => {
    res.json(checkYourTravel);
});

app.get("/api/cars", (req, res) => {
    res.json(meetOurCars);
});

app.get("/api/testimonials", (req, res) => {
    res.json(testimonials);
});

app.get("/api/blogs", (req, res) => {
    res.json(blog);
});

app.get("/api/local", (req, res) => {
    res.json(Localcars);
});

app.get("/api/luxary", (req, res) => {
    res.json(luxurycars);
});

app.get("/api/history", (req, res) => {
    res.json(passengers);
});


app.use('/api/customerData', customerRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});


