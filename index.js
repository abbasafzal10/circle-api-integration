const express = require("express");
const router = require("./route");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
