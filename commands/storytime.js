const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
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
}

module.exports.help = {
    name:"storytime"
  }