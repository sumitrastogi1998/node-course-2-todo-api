// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2));
    // });


    // db.collection('Users').insertOne({
    //     // _id: 123,
    //     name: 'Sumit',
    //     age: 20,
    //     location: 'usA'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert user',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
     client.close();


});