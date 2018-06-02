const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!message.member.roles.some(r=>["Creator of this shit admin","SB Mods"].includes(r.name))) return; message.author.sendMessage("You can't use this!")
    if(!rUser) return message.author.send("Wait, the user didn't exist! Make sure to type the correct name,and it need to exist in our group!");
    let rreason = args.join(" ").slice(22);

    let warningEmbed = new Discord.RichEmbed()
    .setDescription("Twin brother of <@407179814974259200>")
    .setColor("#0x00FFFF")
    .addField("WARNING!", `${rUser} with ID: ${rUser.id} was got a warning!`)
    .addField("REASON:", rreason);

    let warningchannel = message.guild.channels.find(`name`, "warning");
    if(!warningchannel) return message.channel.send("Couldn't find warning channel.");
    message.delete().catch(O_o=>{});
    warningchannel.send(warningEmbed);
}
 
module.exports.help = {
  name: "warning"
}
