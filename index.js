const express=require('express');
const MongooseClass = require('./mongooseClass');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

app.use(express.json());

let prodScheme={
   name:String,
   price:Number,
   brand:String,
   catg:String
};
let dbObj=new MongooseClass.DBmongooseClass('products',prodScheme);
app.get('/',async (res,rep)=>{
rep.send(await dbObj.find());
})
app.get('/create', async (res,resp)=>{
   resp.send( await dbObj.insert({     
   name:"Socket",
   price:250,
   brand:"Tronic",
  }));


});

app.get('/update',  async(req,res)=>{
   let data= await dbObj.update({name:'Socket'},{price:1200});
  res.send(data);
})

app.get('/delete', async (req,res)=>{
   let data= await dbObj.delete({name:'Socket'});
  res.send(data);
})

app.listen(4500);