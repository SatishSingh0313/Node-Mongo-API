const dbConnect=require('./mongodb');
const express=require('express');
const app=express();

app.use(express.json());

app.get('/',async(req,resp)=>{
    let data= await dbConnect();
    data=await data.find().toArray();
    resp.send(data);
});

app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertMany(req.body)
    resp.send(result)
});

app.put('/', async(req,resp)=>{
    let data=await dbConnect();
    let result =  data.updateOne(
           {name:"Sk"},
           {$set:{name:"Dk",email:"Dk@gmail.com"}}
           

        // {id:req.body.id},
        // {$set:req.body}
        )

    resp.send(result)
})

app.delete('/:id',async(req,resp)=>{
   
    let data=await dbConnect();
    let result=data.deleteOne({id:req.params.id})
    resp.send(result)
})

 app.listen(4000);
