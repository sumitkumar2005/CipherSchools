const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./Routes/User-routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/cs-mern', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
