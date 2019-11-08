var express = require('express');
var router = express.Router();
var BlogPost = require('../schemas/BlogPost').BlogPost;

// create/update blog post
router.post('/', (req, res) => {
    console.log(req.body);
    if (!req.body.body || !req.body.title || !req.body.uid) {
        return res.status(406).send("invalid params");
    }
    let blogpost = new BlogPost({
        uid: req.body.uid,
        title: req.body.title,
        body: req.body.body
    });

    BlogPost.findOne({
        uid: req.body.uid
    }, (err, post) => {
        if (err) {
            console.error(err);
            return res.status(400).send(err);
        }
        if (post) {
            // update
            post.overwrite(blogpost).save();
        } else {
            // save new post
            blogpost.save();
        }

        res.send(blogpost);
    });
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