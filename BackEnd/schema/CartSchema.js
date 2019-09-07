const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    // Cart will automatically be assigned an id by mongo
    items: [
        {itemId: ObjectId, Count}
    ],
    creationDate: {type: Date, default: Date.now},
    fulfilledDate: Date, // Null if it has not been fulfilled
    scheduled: {type: Date, default: null}, // Date & time to be fulfilled or null if not scheduled
    scheduledStartDateTime: {type: Date, default: null},
    scheduledTimeInterval: {type: String, default: null},
    scheduledTimeUnits: {type: Date, default: days, // Days/Weeks/Months
});

module.exports = mongoose.model("CartSchema", CartSchema);