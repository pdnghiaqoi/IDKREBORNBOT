const Discord = require('discord.js');
const YTDL = require("ytdl-core")
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
    "meme daddy pls spread the meme virus to this guy",
]

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
        case "despacito2":
        p1 = "./memes/1.png"; p2 = "./memes/2.png"; p3 = "./memes/3.png"; p4 = "./memes/4.png"; p5 = "./memes/5.png"; p6 = "./memes/6.png"; p7 = "./memes/7.png"; p8 = "./memes/8.png"; p9 = "./memes/9.png"; p10 = "./memes/10.png"; p11 = "./memes/11.png"; p12 = "./memes/12.png"; p13 = "./memes/13.png"; p14 = "./memes/14.png"; p15 = "./memes/15.png"; 
        number = 15;
        var random = Math.floor (Math.random() * number);
        switch (random) {
            case 1: message.channel.send ("thanks hacker,i very happy", { files: [p1] }); break;
            case 2: message.channel.send ("oh shit we need to pay to get despacito 2?", { files: [p2] }); break;
            case 3: message.channel.send ("sweet. now i can dance despacito 2 with nintendo", { files: [p3] }); break;
            case 4: message.channel.send ("sweet, new pokemon", { files: [p4] }); break;
            case 5: message.channel.send ("oh shit better watch it in cinema now", { files: [p5] }); break;
            case 6: message.channel.send ("eeyyyy markiplier becom hacker", { files: [p6] }); break;
            case 7: message.channel.send ("***thano after snap his finger***", { files: [p7] }); break;
            case 8: message.channel.send ("'What are you doing in my cd?' -shrek",{ files: [p8] }); break;
            case 9: message.channel.send ("look like nasa found it in mars", { files: [p9] }); break;
            case 10: message.channel.send ("idek but hey, despacito 2 become cameo", { files: [p10] }); break;
            case 11: message.channel.send ("where despacito 2,3,4,5,6,7,8,9,10,11,12,...,67,68?", { files: [p11] }); break;
            case 12: message.channel.send ("great marvel will make despacito the hero move", { files: [p12] }); break;
            case 13: message.channel.send ("just dance despacito version remastered comfrimed", { files: [p13] }); break;
            case 14: message.channel.send ("oh god it <@289969735855243265> disguided as spider despacito", { files: [p14] }); break;
            case 15: message.channel.send ("minedespacito?", { files: [p15] }); break;
        };
    break;
    case "storytime":
        p1 = "./baits/1.png"; p2 = "./baits/2.png"; p3 = "./baits/3.png"; p4 = "./baits/4.png"; p5 = "./baits/5.png"; p6 = "./baits/6.png"; p7 = "./baits/7.png"; p8 = "./baits/8.png"; p9 = "./baits/9.png"; p10 = "./baits/10.png"; p11 = "./baits/11.png"; p12 = "./baits/12.png"; p13 = "./baits/13.png"; p14 = "./baits/14.png"; p15 = "./baits/15.png"; p16 = "./baits/16.png"; p17 = "./baits/17.png"; p18 = "./baits/18.png"; p19 = "./baits/19.png"; p20 = "./baits/20.png"; p21 = "./baits/21.png"; p22 = "./baits/22.png"; p23 = "./baits/23.png"; p24 = "./baits/24.png"; p25 = "./baits/25.png";
        number1 = 25;
        var random1 = Math.floor (Math.random() * number1);
        switch (random1) {
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
            case 16: message.channel.send ({ files: [p16] }); break;
            case 17: message.channel.send ({ files: [p17] }); break;
            case 18: message.channel.send ({ files: [p18] }); break;
            case 19: message.channel.send ({ files: [p19] }); break;
            case 20: message.channel.send ({ files: [p20] }); break;
            case 21: message.channel.send ({ files: [p21] }); break;
            case 22: message.channel.send ({ files: [p22] }); break;
            case 23: message.channel.send ({ files: [p23] }); break;
            case 24: message.channel.send ({ files: [p24] }); break;
            case 25: message.channel.send ({ files: [p25] }); break;
        };
    break;
        case "help":
        var embed = new Discord.RichEmbed()
           .addField("/help", "Show this.")
           .addField("/info", "Show the info of this bot.")
           .addField("/loader", "Show the loader of our admin.")
           .addField("/8balls", "Let the 8 balls answer your question!")
           .addField("/ping", "ping pong")
           .addField("/pong", "pong ping")
           .addField("/despacito2", "some despacito meme")
           .addField("/storytime", "some clickbait meme")
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
