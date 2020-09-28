import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/twitter', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on('connected', console.error.bind(console, 'Mongo Connection Established'));
connection.on('reconnected', console.error.bind(console, 'Mongo Connection Reestablished'));
connection.on('disconnected', console.error.bind(console, 'Mongo Connection Disconnected'));
connection.on('close', console.error.bind(console, 'Mongo Connection Closed'));
connection.on('error', console.error.bind(console, 'connection error:'));
