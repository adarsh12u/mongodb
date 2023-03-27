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

const dbbase = require('./mongodb');

const insert = async() =>{
    const db = await dbbase();
    const result = await db.find().toArray();
    console.log(result);
    console.warn("adarsh gurjar");
}
insert();