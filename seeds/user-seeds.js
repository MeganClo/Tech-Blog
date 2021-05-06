const { User } = require("../models")

const userData = [
    {
        username: "Megs",
        email: "megs.close@gmail.com",
        password: "password1"
    },
    {
        username: "Tru",
        email: "tru.close@gmail.com",
        password: "password2"
    },
    {
        username: "Tim",
        email: "tim.close@gmail.com",
        password: "password3"
    },
    {
        username: "Tanner",
        email: "tanner.close@gmail.com",
        password: "password4"
    },
    {
        username: "Buzz",
        email: "buzz.close@gmail.com",
        password: "password5"
    },
    {
        username: "Fred",
        email: "Fred.close@gmail.com",
        password: "password6"
    },
    
];

const seedUsers = () => User.bulkCreate(userData);

moudule.exports = seedUsers;
