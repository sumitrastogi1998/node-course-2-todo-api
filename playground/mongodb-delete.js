const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    
    //delete Many
    // client.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    //deleteOne
    // client.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });
    
    //findOneAndDelete
//     client.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//         console.log(result);
//     });

    //client.collection('Users').deleteMany({name: 'Sumit'});

    client.collection('Users').findOneAndDelete({_id: new ObjectID("5c7d231b21be8e05843f3307")})
    .then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });
    //client.close();


});