const router = require("express").Router();

const algoliaSearch = require('algoliasearch');

const client = algoliaSearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_SECRET
);

// mongoose-algolia --> sync document to the algolia database
// algoliasearch --> search data in your algolia database.

const index = client.initIndex(process.env.ALOGOLIA_INDEX)

router.post('/searchProduct', async(req,res) => {
    try{
        let result = await index.search(req.body.title);
        res.json(result.hits)
    }catch(err){
        res.json(err.message);
    }
});

module.exports = router;