const express = require('express')
const connectDB = require('./config/db')

const app = express()

// connect database

connectDB()

app.get('/', (req, res) => {
	res.send('API Running')
})

app.use('/api/users', require('./routes/API/users'))
app.use('/api/auth', require('./routes/API/auth'))
app.use('/api/posts', require('./routes/API/posts'))
app.use('/api/profile', require('./routes/API/profile'))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`${PORT} listen`))
