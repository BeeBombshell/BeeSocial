const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// dotenv config
dotenv.config();

// connect to mongodb
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB');
});

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.listen(8800, () => {
    console.log('Backend server is running on port 8800!');
})