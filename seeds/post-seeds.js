const { Post } = require("../models");

const postData = [
    {
        title: "Taking breaks is important for Web Developers.",
        post_text: "Take breaks. Giving your brain a rest can increase productivity. Try to get up and move a little every hour. It might seem unproductive but often the solution will hit your when you're not focusing too hard on finding it.",
        user_id: 1
    },
    {
        title: "Don't be afraid to Ask for Help in tech.",
        post_text: "This is an important thing to remember. All good web developers know when to ask for help. If you're too afraid or prideful to ask for help, it will hinder your growth and waste a lot of time. Make sure to do this both in a learning envirnment as well as in a work-setting.",
        user_id: 4
    },
    {
        title: "Web Developers Can't Stop Being Students.",
        post_text: "If you're in web development, you can't ever stop considering yourself a student. Technology is always changing and you need to make sure that you're always putting in the time, outside of the job to stay up to date with important new technologies.",
        user_id: 1
    },
    {
        title: "Dirty Code isn't Sexy.",
        post_text: "Learn to write visually clean, efficient, and secure code. Dirty code makes it hard to find where errors are and where it may be broken. Follow the DRY protocall and Test and pay attention to performance.",
        user_id: 2
    },
    {
        title: "Keep up a Good Work/Life Balance",
        post_text: "Life is short. Enjoy it. Make sure to pull yourself away from the computer and get outside and do the things you enjoy. Spend time with your family and friends. Unplug and get away from the computer. It will help you be more productive in the long term and keep you from frying yourself out.",
        user_id: 6
    },
    {
        title: "Dont be Arrogant",
        post_text: "Arrogant people are the worst. Don't be the worst. Avoid negativity and be diplomatic. The other side of this coin is to not be a pushover. Difficult balance to strike in any industry, including web development.",
        user_id: 3
    },
    {
        title: "Importance of Learning from Mistakes",
        post_text: "Be aware of how you solve errors and mistakes and make sure to think aobut the following things: Could this have been avoided? What caused it? Can I prevent this from happening again?",
        user_id: 6
    },
    {
        title: "Don't Give up Too Soon",
        post_text: "Coding is hard! It is frustrating. But you'll never get the ultimate satisfaction and high of solving a hard-to-solve problem if you give up too soon. Make sure to exhaust all routes before giving up and don't be hesitant to ask for help. If you give up that it was all for nothing!",
        user_id: 5
    },
    {
        title: "Learn to Take Criticism",
        post_text: "Learning how to hear and take criticism will make you a better developer. It's a great way to learn! Hear the feedback, request the feedback, and understand the feedback!",
        user_id: 6
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;