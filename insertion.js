// const {MongoClient} = require('./mongodb');
// const url = './mongodb://127.0.0.0.1:27017'

// const database = 'crud';
// const client = new MongoClient(url);

// async function insert(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let connection = db.connection('product');
//     let promise = await connection.find().toArray();
//     console.log(promise);

// }
// insert();
// how to insert an data in database;
// const dbbase = require('./mongodb');

// const inserts = async() =>{
//     const db = await dbbase();
//     const result = db.insertOne({name:'lisons',class:'loda lussun',branch:'computer science'})
   
// }
// inserts();