const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { getUser, deleteUser } = require('./user.controller')
const router = express.Router()


router.get('/', getUser)
router.delete('/:id', requireAuth, requireAdmin, deleteUser)


module.exports = router