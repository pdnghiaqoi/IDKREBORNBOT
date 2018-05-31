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
    var myImage = new Array();

    myImage[1] = ".meme/1.jpg";
    myImage[2] = ".meme/2.jpg";
    myImage[3] = ".meme/3.jpg";
    myImage[4] = ".meme/4.jpg";
    myImage[5] = ".meme/5.jpg";
    myImage[6] = ".meme/6.jpg";
    myImage[7] = ".meme/7.jpg";
    myImage[8] = ".meme/8.jpg";
    myImage[9] = ".meme/9.jpg";
    myImage[10] = ".meme/10.jpg";
    myImage[11] = ".meme/11.jpg";
    myImage[12] = ".meme/12.jpg";
    myImage[13] = ".meme/13.jpg";
    myImage[14] = ".meme/14.png";
    myImage[15] = ".meme/15.png";
    
    var rnd = Math.floor(Math.random * myImages.length);
    if (rnd == 0) {
    rnd = 1
    };

    message.channel.send({ files: [myImage[rnd]] })
};
bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
    bot.user.setActivity("/help. Still WIP!", {type: "WATCHING"});
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
        if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
        else message.channel.sendMessage("wait what did u say again?"); break;
        case "loader":
        message.channel.sendMessage("Your loader is require(992103297). Thank you for using us!")
        break;
        case "despacito":
        randommeme();
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
