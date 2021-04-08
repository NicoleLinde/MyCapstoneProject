import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import plantRoutes from './routes/plantRoutes.js'

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const URI = process.env.ATLAS_URI;
mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully!');
});

app.get('/', (req, res) => res.json({ msg: 'Welcome to the plant API' }));

app.use('/api', plantRoutes);

const PORT = process.env.PORT || 4000;
app.listen((PORT), () => console.log('Server up and running'));