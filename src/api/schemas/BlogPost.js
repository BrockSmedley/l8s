var mongoose = require('mongoose');

var blogPostSchema = new mongoose.Schema({
    uid: String,
    title: String,
    body: String,
});

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {
    BlogPost
};