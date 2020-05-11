const router = require('express').Router();
// const router = express.Router()
const {login,registerCo,getAll} = require('../Controller/userController');
router.post('/register', registerCo)
router.post('/login', login)
router.get('/alluser', getAll)
module.exports=router
