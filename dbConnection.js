const { MongoClient } = require('mongodb');
const db_url = 'mongodb://127.0.0.1:27017';
const { MongoMemoryServer } = require('mongodb-memory-server');



exports.getDbConnection = async () => {
    if(process.env.NODE_ENV === 'test') {

        if( process.env.MONGOURI ) {
            const client = new MongoClient(process.env.MONGOURI);
            await client.connect();
            return client.db("tea_manager");
        }else {
            const mongod = await MongoMemoryServer.create();
            process.env.MONGOURI =mongod.getUri()
            const client = new MongoClient(mongod.getUri());
            await client.connect();
            return client.db("tea_manager");
        }





    }
    const client = new MongoClient(db_url);
    await client.connect();
    return client.db("tea_manager");
}
