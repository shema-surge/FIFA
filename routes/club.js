const {Router} = require('express')
const { getClubs, saveClub, getClub, updateClub, deleteClub } = require('../controllers/club')

const router = Router()

router.route('/').get(getClubs()).post(saveClub())
router.route('/:id').get(getClub()).patch(updateClub()).delete(deleteClub())

module.exports = router