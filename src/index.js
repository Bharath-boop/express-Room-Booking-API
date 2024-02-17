import express from 'express'
import appRouter from './router/index.js'
const app = express()
const PORT = process.env.PORT ||8000


app.use(express.json())
app.use('/', appRouter)

app.listen(PORT, () => console.log(`App listening ${PORT}`))