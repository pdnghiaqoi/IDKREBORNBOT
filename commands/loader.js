const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    var embed = new Discord.RichEmbed()
    .addField("Loader", "Our loader is require(992103297)")

    message.author.send(botembed);

}

module.exports.help = {
    name:"loader"
  }