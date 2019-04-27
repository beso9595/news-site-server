const mongoose = require('mongoose');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.MONGO_PORT;
const database = process.env.DATABASE;

mongoose.connect('mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database + '', {
	useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.log);
db.once('open', () => {
	console.log('mongodb connection opened');
});
