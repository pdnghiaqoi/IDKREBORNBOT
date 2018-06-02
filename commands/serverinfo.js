const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setFooter("Server Information")
    .setColor("#0x00FFFF")
    .setThumbnail(sicon)
    .addField("What this server's name?", `This server's name is ${message.guild.name}`)
    .addField("When this server was created?",`This server was created at ${message.guild.createdAt}`)
    .addField("When i joined this group?", `You joined this group at ${message.member.joinedAt}`)
    .addField("How many members we got here?", `Totally, there are ${message.guild.memberCount} members.`);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serverinfo"
}
