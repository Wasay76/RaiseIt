require('dotenv').config();
const cors = require('cors')

const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const BillRouter = require("./Routes/bills")
const MppRouter = require("./Routes/mpps")

// DEV MODE
// MAKE SURE TO LIMIT TO RAISEIT WEBSITE WHEN PUBLISHING

app.use(cors({
    origin: '*'
}));

app.use(express.json())

// ADD THE MIDDLEWARE HERE
app.use('/bills', BillRouter)
app.use('/mpps', MppRouter)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // MAKE IT A ENV LATER
    // CONNECT TO WASAYS DATABASE
    await connectDB("")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
