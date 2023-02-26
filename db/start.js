const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (err) {
        console.error(err);
    }
}

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = connectDB