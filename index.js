
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
    "are you fuckin serious",
    
]


bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
    bot.user.setGame("/help. Still in WIP!")
})


bot.on('message', (message) => {
    if (message.author.equals(bot.name)) return;

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage("pong");
        break;
        case "pong":
        message.channel.sendMessage("ping");
        break;
        case "info":
        message.channel.sendMessage("I am TheIdiotBot, the bot that actually idiot maded by pdnghiaqoi!");
        break;
        case "8balls":
        var embed = new Discord.RichEmbed()
             .addField("8 Balls", ball[Math.floor(Math.random() * ball.length)])  
            .setColor(0x00FFFF)
             .setFooter("memes")
              message.channel.sendEmbed(embed);
        case "loader":
        message.channel.sendMessage("Your loader is require(992103297). Thank you for using us!")
        break;
        case "help":
        var embed = new Discord.RichEmbed()
           .addField("/help", "Show this.")
           .addField("/info", "Show the info of this bot.")
           .addField("/loader", "Show the loader of our admin.")
           .addField("/8balls", "Let the 8 balls answer your question!")
           .addField("/ping", "ping pong")
           .addField("/pong", "pong ping")
           .setColor(0x00FFFF)
           .setFooter("List of commands")
        message.channel.sendEmbed(embed);
        break;
        default:
        message.channel.sendMessage("Invaild commands! ourbotisgettinginvailded");
        break;

    }



});
