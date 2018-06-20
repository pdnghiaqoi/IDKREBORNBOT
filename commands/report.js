const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if (message.channel.id === '458901096564260864') {
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report Info:")
    .setColor("#0x00FFFF")
    .addField("Reporter:", `${message.author} with ID: ${message.author.id}`)
    .addField("Reason/Proof:", rreason)
    .addField("Time:", message.createdAt);
    let authorRe = new Discord.RichEmbed()
    .setDescription("Your report was sended into recently-reports channel and will resolve soon!")
    .setColor("#0x00FFFF")
    .setFooter("Review")
    .addField("Your report's channel", message.channel)
    .addField("Your reason/proof:", rreason)
    .addField("Time:", message.createdAt);

    let reportschannel = message.guild.channels.get("458879401069772840");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    message.author.sendEmbed(authorRe);
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

} else {
  message.channel.sendMessage("sir, this commands is illegal in this channel. please go to <#458901096564260864> to use this command.")
}}
 
module.exports.help = {
  name: "report"
}
