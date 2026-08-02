import { createClient } from '@supabase/supabase-js';
import  {env}  from '../config/env.js';


const adminClient = createClient(env.supabaseUrl, env.supabaseServiceRole,
    { auth: { autoRefreshToken: false, persistSession: false } }
)
const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey)


export {supabase, adminClient}