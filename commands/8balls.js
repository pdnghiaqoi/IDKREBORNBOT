const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
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
    if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
    else message.channel.sendMessage("wait what did u say again?");
}

module.exports.help = {
    name:"8balls"
  }
