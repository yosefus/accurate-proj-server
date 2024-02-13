require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const cors =require('cors')
app.use(cors())
app.use(express.json())
require('./DL/db').connect()

app.listen(port, () => console.log(`server is running on port ${port} `));
