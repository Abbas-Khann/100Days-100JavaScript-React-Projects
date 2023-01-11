import express from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers)

router.get("/:id", getUser)

router.post("/", addUser)
// get the id of the user on a specific path
// delete a specific user 
router.delete("/:id", deleteUser)

router.patch("/:id", updateUser)

export default router