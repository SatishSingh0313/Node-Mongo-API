const dbConnect = require('./mongodb');

const insertData = async () => {

    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { id: 4, name: "ankit", email: "ankit@gmail.com", phno: 5555 },
            { id: 5, name: "rahul", email: "rahul@gmail.com", phno: 6666 }
        ]
    );

    if (result.acknowledged) {
        console.warn("data is inserted");
    }
}

insertData();
  