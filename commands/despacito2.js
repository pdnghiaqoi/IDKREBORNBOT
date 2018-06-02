const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
}

module.exports.help = {
    name:"despacito2"
  }