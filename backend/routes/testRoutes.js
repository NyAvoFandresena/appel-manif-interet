const express = require('express')
const router = express.Router()

// Routes Des API

// test nombre
router.get('/number', (req, res) => {
    const data = {
        year: 1998
    }
    res.json(data)
})

router.post('/test/entreprise', (req, res) => {
    const formData = req.body
    console.log(formData['nom entreprise'])
    console.log(`Data received from front-end: ${formData}`)
    res.send(formData)
})

// 


module.exports = router