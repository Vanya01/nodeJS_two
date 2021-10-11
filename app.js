const mongoose = require('mongoose');
const express = require('express');

const {MONGO_CONNECT_URL, PORT} = require('./Config/config');

const app = express();

mongoose.connect(MONGO_CONNECT_URL);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const userRouter = require('./Routes/endpointsOfUsers');
const authRouter = require('./Routes/userAuthorizationRoute');

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});
