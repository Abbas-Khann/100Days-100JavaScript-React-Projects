import { v4 as uuid4 } from "uuid";

let users = [];

export const addUser = (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuid4() };
    users.push(userWithId);
    console.log("uservarlog", user)

    res.send(`user with the username ${user.firstName} ${user.lastName} added to the database!`);
}

export const getUsers = (req, res) => {
    res.send(users)
    console.log("sending a request to users page")
}

export const getUser = (req, res) => {
    const userId = req.params.id;
    // now that i have accessed the user's id i want to check similar id's to be able to perform add,delete and different operations
    const foundUser = users.find((user) => user.id === userId);
    res.send(foundUser)
    console.log(`user at ${userId} has been found`);
}


export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => {
        return user.id !== id
    });
    res.send(`User with the id ${id} has been deleted!!!`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.params;
    const userToUpdate = users.find((user) => {
        return user.id === id
    });
    if(firstName) {
        userToUpdate.firstName = firstName
    }
    if(lastName) {
        userToUpdate.lastName = lastName
    }
    if(age) {
        userToUpdate.age = age
    }
    res.send(`user with the id: ${id} has been updated!!!`)
}