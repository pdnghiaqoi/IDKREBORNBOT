const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "/"

var ball = [
    "oh yes",
    "maybe",
    "no u",
    "is this a kid",
    "i don give a fuc",
    "despacito 2 comfrimed",
    "i dont know",
]
bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
    bot.user.setGame("Beta. 24/7 host")
})


bot.on('message', (message) => {
    if (message.author.equals(bot.name)) return;

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage("pong");
        break;
        case "info":
        message.channel.sendMessage("I am TheIdiotBot, the bot that actually idiot maded by pdnghiaqoi!");
        break;
        default:
        message.channel.sendMessage("Invaild commands! ourbotisgettinginvailded");
        break;
        case "8balls":
        if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
        else message.channel.sendMessage("wait what did u say again?");
        break;

    }



});

bot.login(process.env.TOKEN);
