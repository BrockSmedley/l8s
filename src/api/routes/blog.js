var express = require('express');
var router = express.Router();
var BlogPost = require('../schemas/BlogPost').BlogPost;

function error(err, res) {
    console.error(err);
    return res.status(400).send(err);
}

// create/update blog post
router.post('/', (req, res) => {
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
        if (err) return error(err, res);
        if (post) {
            // update
            console.log("updating existing post", post.uid);
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
    BlogPost.find((err, posts) => {
        if (err) return error(err, res);
        res.send(posts);
    });
});

// retrieve blog post
router.get('/:id', (req, res) => {
    console.log(req.params);
    BlogPost.findOne({
        uid: req.params.id
    }, (err, post) => {
        if (err) return error(err, res);
        if (!post) return res.status(404).send(`post '${req.params.id}' not found`);
        res.send(post);
    });
});

// delete a blog post
router.delete('/:id', (req, res) => {
    BlogPost.findOneAndDelete({
        uid: req.params.id
    }, (err, result) => {
        if (err) return error(err, res);
        res.send(result);
    })
})

module.exports = router;