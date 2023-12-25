import express from "express";
import mongoose from "mongoose";
// import cors from "cors";
import router from "./routes/user-routes";
// eUg3wHTwEt7xkz3b

const app = express();
// app.use(cors());
app.use(express.json());
app.use("/api/user", router);

mongoose
  .connect(
    "mongodb+srv://adminBlog:eUg3wHTwEt7xkz3b@cluster0.uer55gh.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected the port on 5000 and connected to database")
  )
  .catch((err) => console.log(err));
