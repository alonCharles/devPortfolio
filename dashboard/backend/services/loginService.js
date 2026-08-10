import {supabase} from "../config/supabaseClient.js";

export const login = async (credentials) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email:credentials.email,
        password:credentials.password
    })

    if (error) {
        return { user: null, session: null, error }
    }

    return {
        user:data.user,
        session:data.session,
        error:null
    }
}