const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you are illegal");
  if(!args[0]) return message.channel.send("where are your number");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`rekted ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "rektmsg"
}
