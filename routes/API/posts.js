const express = require('express')
const router = express.Router()

//@route api/posts
//@desc  test routes users
//@acces private
router.get('/', (req, res) => {
	res.send('post route')
})

module.exports = router
