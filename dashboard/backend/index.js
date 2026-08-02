import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import userRoutes from './routes/userRoutes.js';
import loginRoutes from './routes/loginRoutes.js'
import { env } from './config/env.js';

const app = express()

app.use(cors({
    origin:'http://localhost:5173'
}));
app.use(helmet())
app.use(express.json())

app.use(rateLimit({
    windowMs:15*60*1000,

    max:100
}))

app.use('/api', userRoutes)
app.use('/api', loginRoutes)

app.get('/',(req,res)=> {
    res.send("api is running")
})

app.listen(env.port, () => {
    console.log(`app is running on port: ${env.port}`)
})