import supabase from "../config/supabaseClient.js"
import dotenv from 'dotenv'

export const createUser = async  (userData) => {
    const {data, error} = await supabase
    .from('users')
    .insert([userData])
    .select()

    console.log(process.env.SUPABASE_URL)

    if (error) console.log('error inserting', error.message)
        console.log(data)
}

export const getUsers = async () => {
    const {data, error} = await supabase
    .from('users')
    .select("*")

    if (error) console.log('error getting users', error.message)
        console.log(data)
}

export const updateUser = async (id, update) => {
    const {data, error} = await supabase
    .from('users')
    .update(update)
    .eq("id", id)
    .select()

     if (error) console.log('error updating user', error.message)
        console.log(data)
}

export const deleteUser = async (id) => {
    const {error} = await supabase
    .from('users')
    .delete()
    .eq("id",id)

     if (error) console.log('error deleting user', error.message)
}
