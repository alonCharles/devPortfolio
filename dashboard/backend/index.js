import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';

const app = express()

app.use(cors());
app.use('/api', userRoutes)

app.get('/',(req,res)=> {
    res.send("api is running")
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})