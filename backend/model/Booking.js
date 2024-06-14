import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        required: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'completed', 'cancelled'],
        default: 'pending'
    },
    fare: {
        type: Number,
        required: true
    },
    vehicleType: {
        type: String,
        enum: ['sedan', 'SUV', 'van', 'motorcycle', 'bike']
    },
    driverRating: {
        type: Number,
        min: 0,
        max: 5
    },
    
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
