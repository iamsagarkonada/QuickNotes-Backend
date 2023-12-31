const connectToMongo=require('./db');
const express = require('express')
var cors=require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT
app.use(cors())

app.use(express.json())

app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/notes',require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`iNoteBook app listening on port http://localhost:${port}`)
})

