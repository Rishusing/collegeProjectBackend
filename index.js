const express = require('express')
require('./src/db/mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()

const port =process.env.PORT 

app.use(express.json())

const studentRouter = require('./src/routers/student')
const teacherRouter = require('./src/routers/teacher')

app.use('/api', studentRouter);
app.use('/api', teacherRouter);

app.use(
  cors({
    origin: '*',
  }),
)



app.get('/', (req, res) => {
    res.send({ msg: 'Hey congratulations, we are connected'})
  })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
 