const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    // client.collection('Todos').find({
    //     _id: new ObjectID("5c7d26dfa07e06081d014b7e")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // client.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);

    // },(err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    client.collection('Users').find({
        name: 'Sumit'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    
    //client.close();


});