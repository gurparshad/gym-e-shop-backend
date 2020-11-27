const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    type: {type: String, Unique: true, required: true}
});

module.exports = mongoose.model("Category", CategorySchema);