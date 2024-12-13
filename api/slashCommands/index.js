const { branchingStrategyHandler } = require('./slashCommands')

const router = require('express').Router()


router.post('/branching-strategy', branchingStrategyHandler)

module.exports = router