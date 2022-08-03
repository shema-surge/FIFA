const {Router} = require('express')
const { getPlayerReviews, savePlayerReview , getPlayerReview, editPlayerReview, deletePlayerReview } = require('../controllers/playerReviews')

const router = Router()

router.route('/').get(getPlayerReviews()).post(savePlayerReview())
router.route('/:id').get(getPlayerReview()).patch(editPlayerReview()).delete(deletePlayerReview())

module.exports = router