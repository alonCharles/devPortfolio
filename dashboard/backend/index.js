import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import userRoutes from './routes/userRoutes.js';
import { env } from './config/env.js';

const app = express()

app.use(cors({
    origin:env.frontendUrl,
    credentials:true
}));
app.use(helmet())
app.use(express.json())

app.use(rateLimit({
    windowMs:15*60*1000,

    max:100
}))

app.use('/api', userRoutes)

app.get('/',(req,res)=> {
    res.send("api is running")
})

app.listen(env.port, () => {
    console.log(`app is running on port: ${env.port}`)
})