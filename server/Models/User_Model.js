const mongoose = require('mongoose');

// Define the schema
const CreateSchema = new mongoose.Schema({
    imgurl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true,
    },
    PublishedDate: {
        type: Date,
        default: Date.now,
    },
    ClickedDate : {
        type:Date,
    }
});

// Create the model
const Create = mongoose.model('Create', CreateSchema);

// Export the model
module.exports = Create;
