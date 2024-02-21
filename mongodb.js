const {MongoClient} = require('mongodb')
const url= 'mongodb://127.0.0.1:27017';
const databaseName='student'
const client= new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db= result.db(databaseName);
    return db.collection('data');
  
}
module.exports= dbConnect;