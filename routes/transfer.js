const {Router} = require('express')
const { getTransfers, saveTransfer , getTransfer} = require('../controllers/transfer')

const router = Router()

router.route('/').get(getTransfers()).post(saveTransfer())
router.route('/:id').get(getTransfer())

module.exports = router