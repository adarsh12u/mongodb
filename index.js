// const MongoClient =require('mongodb').MongoClient;
// connection of mongo db

// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'crud';

// const client = new MongoClient(url);

// async function getdata(){
//     let result =await client.connect();
//     let db=result.db(database);
//     let collection = db.collection('product');
//       let promise=await collection.find().toArray();
//     console.log(promise);
// }
// getdata();

// it is very time consuming method there fore we canot referse ythis techinque and we can use this commnand which is in lower part of tha code

// const {MongoClient} = require('mongodb');
// // const { Collection } = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'crud';

// const client = new MongoClient(url); 
// async function getdata()
// {
//    let result=await client.connect();
//    let db = result.db(database);
//    let collection = db.collection('product');
//    let promise =await collection.find().toArray();
//    console.log(promise); 
// }
// getdata();


// **** *************************** single data read data from mongo db  { with effient way }********************** ****


// const {MongoClient} = require('mongodb');
// // const { Collection } = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'crud';

// const client = new MongoClient(url); 
// async function getdata()
// {
//    let result=await client.connect();
//    let db = result.db(database);
//    let collection = db.collection('product');
//    let promise =await collection.find({name:'nitin'}).toArray();
//    console.log(promise); 
// }
// getdata();


//  **   ********************  only connecting the data base to node  ************************ **

// const { MongoClient } = require('mongodb');
// // const { Collection } = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017';
// const database = 'crud';

// const client = new MongoClient(url);
// async function dbconnect() {
//    let result = await client.connect();
//    let db = result.db(database);
//    return db.collection('product');
// }

// using promises because this return we us promise

// dbconnect().then((value)=>{
// return (value.find().toArray());
// }).then((respponse)=>{
//    console.log(respponse)
// })
// it was also write as this type

//****************** */ it is a function for reading a data from data base  ********************** ***

// dbconnect().then((value) => {
//    value.find().toArray().then((respponse) => {
//       console.log(respponse)
//    })
// })
// using async await because this give we us promise

// const fun =async()=>{
//    let y=await dbconnect();
//    return y.find().toArray();
// }
// const asy = async() =>{
//      const aw = await fun();
//      console.log(aw)
// }
// asy();
// it is also writen as

// how to take data connection code in another file as well
const dbconnect = require('./mongodb');
const fun =async()=>{
   let y = await dbconnect();
   let data = await y.find().toArray();
   console.log(data)
}


fun();