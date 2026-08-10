import express from 'express'
import { authenticate } from '../middleware/authenticate.js'
import { supabase } from '../config/supabaseClient.js'

const router = express.Router()

router.get('/profile', authenticate, async(req, res) => {
    const {data, error} = await supabase
    .from('profiles')
    .select('*')
    .eq("id", req.user.id)

    if(error) res.status(500).json({error: error.message})

     return res.json(data)   
})

export default router