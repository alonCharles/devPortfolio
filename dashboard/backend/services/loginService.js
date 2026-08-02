import {supabase} from "../config/supabaseClient.js";

export const login = async (credentials) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email:credentials.email,
        password:credentials.password
    })

    if (error) {
        const err = new Error('Invalid email or Password')
        err.status = 401
        throw (err)
    }

    return {
        user:data.user,
        session:data.session
    }
}