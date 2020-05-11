const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./Router/router');
// const router = require('./Router/transactionRouter');
const passport = require('passport');
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// app.use(passport.initialize())
// require('./Passport/passport')(passport)
app.use(passport.initialize())
require('./Passport/passport')(passport)
app.use('/api/user',userRouter)
app.use('/api/transaction',require('./Router/transactionRouter'))
app.get('/',(req,res)=>{
	res.json({
		message:'Wellcome Our Money-Managment-Application'
	})
})

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
	console.log(`Server is running on PORT ${PORT}`);
	mongoose.connect('mongodb://localhost/money-managment-app',
	{useUnifiedTopology:true},
	()=>console.log("Database in running")
)
})
