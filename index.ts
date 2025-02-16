import express from 'express'
import indexRoutes from './src/api/v0.1/index/index.routes'


const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/v0.1', indexRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})



