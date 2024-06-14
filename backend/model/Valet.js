import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});

const Driver = mongoose.model('Valet', driverSchema);

export default Driver;
