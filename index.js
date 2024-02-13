require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const cors =require('cors');
const leadRouter = require("./router/lead.router");
app.use(cors())
app.use(express.json())
app.use('/api/lead',leadRouter);
require('./DL/db').connect()

app.listen(port, () => console.log(`server is running on port ${port} `));
