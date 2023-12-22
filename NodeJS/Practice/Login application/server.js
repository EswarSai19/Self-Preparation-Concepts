const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use("/api/contacts", require("./Routes/contactRoutes"));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
