import { createUser, updateUser, getUsers, deleteUser } from "../services/userServices.js";

export const addUser = async (req,res) => {
    try{
        const newUser = req.body
    const {userData, error} = await createUser(newUser)
    res.status(201).json(userData)
    } catch(error) {
        res.status(434).json({error:error.message})
    }
}

export const fetchUsers = async (req,res) => {
    try {
        const users = await getUsers()
        res.status(200).json(users)
    } catch(error) {
        res.status(500).json({error:error.message})
    }
}

export const editUser = async (req,res) => {
    try {
        const {id} = req.params
        const updates = req.body
        const updatedUser = await updateUser(id,updates)
        res.status(200).json(updateUser)
    } catch(error) {
        res.status(400).json({error:error.message})
    }
}
export const removeUser = async (req,res) => {
    try {
        const {id} = req.params
        const result = await deleteUser(id)
        res.status(200).json(result)
    } catch(error) {
        res.status(400).json({error:error.message})
    }
}