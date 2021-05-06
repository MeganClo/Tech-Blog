const { Comment } = require("../models");

const commentData = [
    {
        comment_text: "I really needed to hear this!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "I definitely don't take enough breaks.",
        user_id: 5,
        post_id: 1
    },
    {
        comment_text: "Ah man, this is hard to hear, I understand it but as I'm in the middle of a bootcamp, I'm excited to not be a student.",
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: "This is right on the nose!",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "Arrogance really is the worst. It seems like there are a lot of arrogant web-developers but I've been lucky enough to work with mostly great people.",
        user_id: 6,
        post_id: 6
    },
    {
        comment_text: "I really needed to hear this!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "This is so true! How many times have I wanted to give up only to see that I was so close to the solution??",
        user_id: 5,
        post_id: 8
    },
    {
        comment_text: "Nailed it here.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "I really needed to hear this!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Well said, although it doesn't always feel good",
        user_id: 1,
        post_id: 9
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;