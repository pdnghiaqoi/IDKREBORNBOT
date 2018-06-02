const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#0x00FFFF")
    .setThumbnail(bicon)
    .addField("What your name?", `My name is ${bot.user.username}, and nice to meet you!`)
    .addField("When did you created?",`I was created at ${bot.user.createdAt}`)
    .addField("Who created you?", "pdnghiaqoi/IDK REBORN was created me!")
    .setFooter("Info of this bot.");
    message.author.sendEmbed(botembed);
}

module.exports.help = {
  name:"botinfo"
}
