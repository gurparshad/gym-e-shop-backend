const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseAlgolia = require('mongoose-algolia');

const ProductSchema = new Schema({
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    owner: {type: Schema.Types.ObjectId, ref: "Owner"},
    title: String,
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    rating: [{ type: Schema.Types.ObjectId, ref: "Review"}],
})

ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_SECRET,
    indexName: process.env.ALOGOLIA_INDEX,

    selector: "title _id photo description price rating",
    populate: {
        path: "owner",
        select: "name"
    },
    debug: true
});

let Model = mongoose.model("Product", ProductSchema);

Model.SyncToAlgolia()
Model.SetAlgoliaSettings({
    searchableAttributes: ['title']
})

module.exports = Model