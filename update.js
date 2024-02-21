const dbConnect=require('./mongodb');
const updateData= async ()=>{
    let data= await dbConnect();
    let result=await data.updateOne(
        {name:'satish'},{
            $set:{name:'singh',phno:91111}
        }
    );
    if (result.acknowledged) {
        console.warn("data is updated");
    }
    

}
updateData();