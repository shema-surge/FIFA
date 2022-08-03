const {Router} = require('express')
const { getPlayers, savePlayer, getPlayer, updatePlayer, deletePlayer } = require('../controllers/player')

const router = Router()

router.route('/').get(getPlayers()).post(savePlayer())
router.route('/:id').get(getPlayer()).patch(updatePlayer()).delete(deletePlayer())

module.exports = router