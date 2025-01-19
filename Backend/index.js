require('dotenv').config();
const cors = require('cors')

const express = require('express');
const app = express();
const connectDB = require('./db/connect')

const BillRouter = require("./Routes/bills")
const MppRouter = require("./Routes/mpps")

// DEV
app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.use('/bills', BillRouter)
app.use('/mpps', MppRouter)

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // MAKE IT A ENV LATER
    await connectDB("mongodb+srv://shadmansohel04:8Pn4mZAV4SJswCXt@cluster0.crj3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
