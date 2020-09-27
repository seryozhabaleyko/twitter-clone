import mongoose from 'mongoose';

try {
    mongoose.connect('mongodb://localhost:27017/twitter', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`mongodb: success`);
} catch (error) {
    console.error(`mongodb: error - ${error}`);
}

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
