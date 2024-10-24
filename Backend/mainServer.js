require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');  
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`MongoDB connected successfully! Running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message);
    });
