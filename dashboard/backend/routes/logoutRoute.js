import express from 'express'
import { supabase } from '../config/supabaseClient.js'

const router = express.Router()

router.post('/logout', async (req, res) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(" ")[1]

        if(token) {
            await supabase.auth.signOut(token)
            return res.status(200).json({message:'Logout successful'})
        }
        
        
    } catch(error) {
        return res.status(500).json({message: `Error Logging Out: ${error}`})
        console.log(error)
    }
    
})

export default router