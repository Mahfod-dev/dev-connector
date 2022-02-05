const express = require('express')
const router = express.Router()

//@route api/users
//@desc  test routes users
//@acces public
router.get('/', (req, res) => {
	res.send('USER route')
})

module.exports = router
