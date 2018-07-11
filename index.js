const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const Auditlog = require("discord-auditlog");
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

  bot.user.setGame('Say /how to cmds | despacito 2', 'https://www.twitch.tv/pdnghia')
   
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.content.startsWith(botconfig.prefix)) return;
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
       
});

Auditlog(bot, {
    "serverid": {
        channel: "logs",
        movement: "join-message"
    }
});

bot.login(process.env.TOKEN);
