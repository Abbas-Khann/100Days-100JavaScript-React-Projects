import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import PostRoutes from "./routes/posts.js";

dotenv.config()

const app = express();
// posts route and the function call of postRoutes from posts.js
app.use("/posts", PostRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// connectionURL of the mongo_db database
const CONNECTION_URL = process.env.CONNECTION_URL;
// port to connect to
const PORT = process.env.PORT || 5001

// connection to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`)))
.catch((err) => console.log(err.message));

// to get rid of warnings