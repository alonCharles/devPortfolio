import dotenv from "dotenv";

dotenv.config();

export const env = {

    port: process.env.PORT,

    nodeEnv: process.env.NODE_ENV,

    supabaseUrl: process.env.SUPABASE_URL,

    supabaseAnonKey: process.env.SUPABASE_ANON_KEY,

    supabaseServiceRole: process.env.SUPABASE_SERVICE_ROLE_KEY

};