import express from 'express'
import indexRoutes from './src/api/index/index.routes'

const app = express()

app.use('/v0.1', indexRoutes)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})



