const express = require('express')

const bodyParser = require('body-parser')

const studentInfoRoute = require('./route/StudentInfoRoute')

const studentAcademicInfo = require('./route/StudentAcedemicInfo')

const dbconnect = require('./db/db')

dbconnect()

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/studentInfo',studentInfoRoute)

app.use('/studentAcademicInfo',studentAcademicInfo)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });