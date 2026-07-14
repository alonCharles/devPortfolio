import { createClient } from '@supabase/supabase-js';
import { env } from '../config/env';

const supabase = createClient(env.supabaseUrl, env.supabaseAnonKey);
const adminClient = createClient(env.supabaseUrl, env.supabaseServiceRole)


export default supabase