const express = require('express');
const router = express.Router();

const feedController = require('../controller/feedController');

router.route('/api/feedPosts')
    .get((req,res) => {
        feedController.getfeedPosts(req,res);
    })
    .post((req,res) => {
        feedController.savefeedPost(req,res);
    })

router.route('/api/feedPosts/:feedPostId')
    .get( (req, res) => {
        feedController.getfeedPost(req, res);
    })
    .delete( (req, res) => {
        feedController.deletefeedPost(req, res);
    })
    .patch( (req, res) => {
        feedController.updatefeedPost(req, res);
    })

module.exports = router;