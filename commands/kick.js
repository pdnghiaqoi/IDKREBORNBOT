const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.roles.some(r=>["Creator of this shit admin", "BOT", "super kiki", "Bot Admin","Trusted Players/Normal Friend","BOT(Snappy) Creator","Staff","SB Mods"].includes(r.name))) return message.channel.send("You don't have perm to kick!");
    if(kUser.roles.some(r=>["Creator of this shit admin", "BOT", "super kiki", "Bot Admin","Trusted Players/Normal Friend","BOT(Snappy) Creator","Staff","SB Mods"].includes(r.name))) return message.channel.send("You can't kick him!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("A user just got kicked!", `${kUser} with ID ${kUser.id} was got kicked`)
    .addField(`Who kicked ${kUser}?`, `<@${message.author.id}> with ID ${message.author.id} just kick ${kUser}.`)
    .addField(`Where ${kUser} was got kicked?`, `${kUser} was got kicked in ${message.channel}`)
    .addField(`When ${kUser} was got kicked? `, `${kUser} was got kicked when it message.createdAt`)
    .addField(`Why ${kUser} was got kicked?`, `${kUser} was got kicked because ${kReason}`);

    let kickChannel = message.guild.channels.find(`name`, "bots-log");
    if(!kickChannel) return message.channel.send("Can't find bot log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
