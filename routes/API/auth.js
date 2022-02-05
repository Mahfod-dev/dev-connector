const express = require('express')
const router = express.Router()

//@route api/auth
//@desc  test routes users
//@acces private
router.get('/', (req, res) => {
	res.send('auth route')
})

module.exports = router
