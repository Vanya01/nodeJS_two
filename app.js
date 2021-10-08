const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_URL, PORT} = require('./Config/config');

const ldQwfW = express();

mongoose.connect(MONGO_CONNECT_URL);

ldQwfW.use(express.json());
ldQwfW.use(express.urlencoded({extended: true}));

const userRouter = require('./Routes/endpointsOfUsers');

ldQwfW.use('/users', userRouter);

ldQwfW.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
