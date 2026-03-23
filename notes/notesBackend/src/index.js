import express from 'express';
import cors from 'cors'

const app = express();
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.send(`<h1>Hello Node</h1>`)
})

app.listen(port, () => {
    console.log('Server Connected on Port 3000')
})

