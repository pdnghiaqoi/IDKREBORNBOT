const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  bot.user.setStatus('idle')

  bot.user.setGame('/how. Still in beta!', 'https://www.twitch.tv/pdnghia')
   
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.startsWith(botconfig.prefix)) return; 
  
  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send("pls wait 1 min so we can talk back");
} else {
   let prefix = botconfig.prefix;
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);
   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);
talkedRecently.add(msg.author.id);
setTimeout(() => {
  talkedRecently.delete(msg.author.id);
}, 60000);
}

 

});

bot.login(process.env.TOKEN);
