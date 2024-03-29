const mongoose = require('mongoose');
const { Schema, model } = mongoose;
mongoose.set("returnOriginal", false);

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('newsletter', userSchema);