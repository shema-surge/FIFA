const {Router} = require('express')
const { getClubReviews, saveClubReview , getClubReview, updateClubReview, deleteClubReview } = require('../controllers/clubReviews')

const router = Router()

router.route('/').get(getClubReviews()).post(saveClubReview())
router.route('/:id').get(getClubReview()).patch(updateClubReview()).delete(deleteClubReview())

module.exports = router