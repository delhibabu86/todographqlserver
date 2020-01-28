const mongoose = require('mongoose');
// Replace with your mongoLab URI
const MONGO_URI = `mongodb://dbhanu:dbhanu@todo-shard-00-00-syy6i.mongodb.net:27017,todo-shard-00-01-syy6i:27017,todo-shard-00-02-syy6i:27017/test?ssl=true&replicaSet=todo-shard-0&authSource=admin&retryWrites=true&w=majority`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true },  { useUnifiedTopology: true } );
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));