const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const authUser = require('./routes/auth')
const postUser = require('./routes/posts')
const app = express()

mongoose.connect('mongodb+srv://zaki1001:21jumpstreet@cluster0-p6lzy.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{console.log('DB connected ')})
app.post('/',(req,res)=>{
})



//middleware 

app.use(express.json());
app.use('/',authUser);

app.use('/',postUser);
PORT = 3000
app.listen(PORT,()=>console.log('server is running'))