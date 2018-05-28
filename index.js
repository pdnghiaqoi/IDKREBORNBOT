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
        case "8balls":
        if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
        else message.channel.sendMessage("wait what did u say again?");
        case "loader":
        message.channel.sendMessage("Your loader is require(992103297). Thank you for using us!")
        break;
        case "help":
        message.channel.sendMessage("```Commands:\n/help -Show this.\n/ping -ping pong\n/pong -pong ping\n/info -Show the info of this bot!\n/loader -Show the loader of my admin.\n/8balls -8 balls answer your question.```")
        break;
        default:
        message.channel.sendMessage("Invaild commands! ourbotisgettinginvailded");
        break;

    }



});

bot.login(process.env.TOKEN);
