const express = require('express')
const router = express.Router()

//@route api/profiles
//@desc  test routes users
//@acces private
router.get('/', (req, res) => {
	res.send('USER route')
})

module.exports = router
