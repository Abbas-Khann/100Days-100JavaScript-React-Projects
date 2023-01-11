import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./servers/users.js";

const app = express();
const PORT = 5001 || 5002;
// using the bodyParser as JSON
app.use(bodyParser.json())

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    console.log("Getting successfully!")
    res.send("On the / page")
})

// Running the server
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`))
