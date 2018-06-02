const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    var embed = new Discord.RichEmbed()
    .addField("/how", "Show this.")
    .addField("/botinfo", "Show the info of this bot.")
    .addField("/kick", "Kick a player. WARNING:Perm needed.")
    .addField("/8balls", "Let the 8 balls answer your question!")
    .addField("/report", "Send a report to #reports channel.")
    .addField("/serverinfo", "Show this server's info.")
    .addField("/despacito2", "some despacito meme")
    .addField("/storytime", "some clickbait meme")
    .setColor(0x00FFFF)
    .setFooter("List of commands")
 message.author.sendEmbed(embed);
}
module.exports.help = {
    name:"how"
  }