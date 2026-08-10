import { login } from "../services/loginService.js";
import { env } from "../config/env.js";

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password) {
            return res.status(400).json({error: 'Email and password required'})
        }

        const {user, session, error} = await login({email:email, password:password})

        //setting refresh token, save for later

        // res.cookie('refresh_token', session.refresh_token, {
        //     httpOnly: true,
        //     secure: env.
        // })

        if(error) {
            return res.status(411).json({message: `${error.message}`})
        }
        
        return res.status(200).json({
            profile:user,
            access_token: session.access_token,
            refresh_token: session.refresh_token
        })
    } catch(err) {
        console.error(err)
    return res.status(500).json({ error: 'Internal server error' });
    }
}