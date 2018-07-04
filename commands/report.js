const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     if (message.channel.name === 'reports') {
    let rreason = args.slice(1).join(" ");
    var Attachment = (message.attachments).array();
    if (!Attachment) return message.channel.send("where are my proof?")
    var ure = Attachment[0].url
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report:")
    .setColor("#0x00FFFF")
    .addField("Reporter:", `${message.author} with ID: ${message.author.id}`)
    .addField("Reporter's Channel:", message.channel)
    .addField("Reporter's Time:", message.createdAt)
    .addField("Reporter's Reason:", rreason)
    .setImage(ure);
    let authorRe = new Discord.RichEmbed()
    .setDescription("Your report was sended into reports and will resolve soon!")
    .setColor("#0x00FFFF")
    .setFooter("Review")
    .addField("Your report's channel:", message.channel)
    .addField("Your report's time:", message.createdAt)
    .addField("Your report's reason:", rreason)
    .setImage(ure);
    let reportschannel = message.guild.channels.find(`name`, "recently-reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    message.author.sendEmbed(authorRe);
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

     } else {
         message.channel.sendMessage("sir this is illegal at our country. pls move into #reports")
     }}
 
module.exports.help = {
  name: "report"
}
