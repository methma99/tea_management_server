const { MongoClient } = require('mongodb');
const db_url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(db_url);


exports.getDbConnection = async () => {
    await client.connect();
    return client.db("tea_manager");
}
