var express = require('express');
var router = express.Router();
var BlogPost = require('../schemas/BlogPost').BlogPost;

// create new blog post
router.post('/', (req, res) => {
    console.log(req.body);
    res.send("NEW BLOG POST"); // TODO: CHANEG ME
});

// retrieve all posts
router.get('/', (req, res) => {
    console.log("GETTING POSTS");
    res.send("ALL BLOG POSTS"); // TODO: CHANEG ME
})

// retrieve blog post
router.get('/:id', (req, res) => {
    console.log(req.params);
    res.send("SINGLE BLOG POST"); // TODO: CHANEG ME
});

module.exports = router;