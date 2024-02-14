require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const cors =require('cors');

require('./DL/db').connect()

app.use(cors())
app.use(express.json())

const leadRouter = require("./router/lead.router");
app.use('/api/lead',leadRouter);

const campaingRouter = require("./router/campaign.router");
app.use('/api/campaign',campaingRouter);




app.listen(port, () => console.log(`server is running on port ${port} `));
