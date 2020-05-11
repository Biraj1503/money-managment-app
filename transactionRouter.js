// const router = require('express').Router();
// const authenticate = require('../Authenticate/authenticate');
// const {create, getAll, getSingleTransaction, getUpdate, getDelete} = require('../Controller/transactionController');
//
// router.get('/', authenticate, getAll)
// router.post('/', authenticate, create)
// router.get('/:transactionId', getSingleTransaction)
// router.put('/:transactionId', getUpdate)
// router.delete('/:transactionId', getDelete)
// module.exports = router

const router = require('express').Router();
const {create,getAll,Update,Delete} = require('../Controller/transactionController');
const authenticate = require('../Authenticate/authenticate');
router.get('/', authenticate, getAll)
router.post('/', authenticate, create)
// router.get('/:transactionId', authenticate)
router.put('/:transactionId', authenticate, Update)
router.delete('/:transactionId', authenticate, Delete)
module.exports = router
