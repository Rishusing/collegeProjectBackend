const express = require('express')
const Student = require('../models/student')
const router = new express.Router()

const cors = require('cors')

router.use(
  cors({
    origin: '*',
  }),
)


router.post('/student', async (req, res) => {
  
  try {
    
    const student = new Student(req.body);
    await student.save();
    res.status(200).send(student);

  }

  catch (e) {
    res.status(400).send(e);
  }
  
})

router.get('/student/:publickey', async (req, res) => {

  try {

    const student = await Student.findOne({publicKey: req.params.publickey});
    
    res.status(201).send(student);

  }

  catch (e) {
    res.status(404).send(e);
  }

})



module.exports = router