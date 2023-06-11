const express = require('express')
const Teacher = require('../models/teacher')
const router = new express.Router()

const cors = require('cors')

router.use(
    cors({
        origin: '*',
    }),
)


router.post('/teacher', async (req, res) => {

    try {

        const teacher = new Teacher(req.body);
        await teacher.save();
        res.status(200).send(teacher);

    }
    catch (e) {
        res.status(400).send(e);
    }

})

router.get('/teacher/:publickey', async (req, res) => {

    try {

        const teacher = await Teacher.findOne({ publicKey: req.params.publickey });
        res.status(201).send(teacher);

    }
    catch (e) {
        res.status(404).send(e);
    }

})


module.exports = router