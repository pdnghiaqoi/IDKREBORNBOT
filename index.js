const Discord = require('discord.js');
const YTDL = require("ytdl-core")
const bot = new Discord.Client();


var prefix = "/"

var servers = {};


var ball = [
    "oh yes",
    "maybe",
    "no u",
    "is this a kid",
    "i don give a fuc",
    "despacito 2 comfrimed",
    "i dont know",
    "meme daddy pls spread the meme virus to this guy",
]

function randommeme() {
    
    var rnd = Math.floor(Math.random * 15);
    if (rnd == 0) {
    rnd = 1
    };

};
bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
    bot.user.setActivity("/help. Still WIP!", {type: "WATCHING"});
})


bot.on('message', (message) => {
    if (message.author.equals(bot.name)) return;
     
    
    if(!message.content.startsWith(prefix)) return;
        p1 = "./meme/1.jps"; p2 = "./meme/2.jps"; p3 = "./meme/3.jps"; p4 = "./meme/4.jps"; p5 = "./meme/5.jps"; p6 = "./meme/6.jps"; p7 = "./meme/7.jps"; p8 = "./meme/8.jps"; p9 = "./meme/9.jps"; p10 = "./meme/10.jps"; p11 = "./meme/11.jps"; p12 = "./meme/12.jps"; p13 = "./meme/13.jps"; p14 = "./meme/14.png"; p15 = "./meme/15.png"; 
        number = 15;
        var random = Math.floor (Math.random() * number);
        if (message.content === "despacito 2") {
        switch (random) {
            case 1: message.channel.send ({ files: [p1] }); break;
            case 2: message.channel.send ({ files: [p2] }); break;
            case 3: message.channel.send ({ files: [p3] }); break;
            case 4: message.channel.send ({ files: [p4] }); break;
            case 5: message.channel.send ({ files: [p5] }); break;
            case 6: message.channel.send ({ files: [p6] }); break;
            case 7: message.channel.send ({ files: [p7] }); break;
            case 8: message.channel.send ({ files: [p8] }); break;
            case 9: message.channel.send ({ files: [p9] }); break;
            case 10: message.channel.send ({ files: [p10] }); break;
            case 11: message.channel.send ({ files: [p11] }); break;
            case 12: message.channel.send ({ files: [p12] }); break;
            case 13: message.channel.send ({ files: [p13] }); break;
            case 14: message.channel.send ({ files: [p14] }); break;
            case 15: message.channel.send ({ files: [p15] }); break;
        };
    };
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
        if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
        else message.channel.sendMessage("wait what did u say again?"); break;
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
           .addField("/despacito", "some despacito meme")
           .setColor(0x00FFFF)
           .setFooter("List of commands")
        message.author.sendEmbed(embed);
        break;
        
        default:
        message.channel.sendMessage("Invaild commands! ourbotisgettinginvailded");
        break;

    }



});

bot.login(process.env.TOKEN);
