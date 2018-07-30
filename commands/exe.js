const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      var code = args.join(" ");
try {
    eval(code); 
} catch (e) {
    if (e instanceof SyntaxError) {
        message.channel.send("error:${e.message}");
    }
      else {
     message.channel.send("exe success")       
      }
}
}
module.exports.help = {
    name:"exe"
  }
