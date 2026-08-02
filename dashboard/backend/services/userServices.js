import {adminClient} from '../config/supabaseClient.js'

export const createUser = async  (userData) => {
    const {data: authData, error:authError} = await adminClient.auth.admin.createUser({
        email: userData.email,
        password:userData.password
    })
    

    if (authError) {
        return authError
    }
    

        const {data:profileData, error:profileError} = await adminClient
        .from('profiles')
        .insert({
            id: authData.user.id,
            email:userData.email,
            first_name:userData.first_name,
            last_name:userData.last_name,
            role_id: userData.role_id
        })
        .select()
        .single()

        if (profileError) {
            await adminClient.auth.admin.deleteUser(authData.user.id);
            return profileError;
        }

            return profileData
}

export const getUsers = async () => {
    const {data, error} = await supabase
    .from('users')
    .select("*")

    if (error) console.log('error getting users', error)
        console.log(data)
    return data
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
