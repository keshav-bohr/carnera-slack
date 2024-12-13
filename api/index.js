const slashApiHandler = require('./slashCommands')
const router = require('express').Router()


router.use('/slash', slashApiHandler)

module.exports = router