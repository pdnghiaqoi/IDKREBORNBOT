const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Wait, the user didn't exist! Make sure to type the correct name,and it need to exist in our group!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Twin brother of <@407179814974259200>")
    .setColor("#15f153")
    .addField("A user was got reported!", `${rUser} with ID: ${rUser.id}`)
    .addField("Who report him?", `${message.author} with ID: ${message.author.id}`)
    .addField("Where he got reported?", message.channel)
    .addField("When he got reported?", message.createdAt)
    .addField("Why he got reported?", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "report"
}
