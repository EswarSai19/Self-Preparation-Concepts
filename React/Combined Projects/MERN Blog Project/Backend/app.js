//  "start": "nodemon --experimental-modules --es-module-specifier-resolution=node app.js",
// type:module
// YaQH1HA7SeNcUCpN

import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-router";

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose
  .connect(
    "mongodb+srv://adminMernBlog:YaQH1HA7SeNcUCpN@cluster0.rrgbaa5.mongodb.net/MERN_Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to database and listening to port 5000"))
  .catch((err) => console.log(err));
