const talkedRecently = new Set();
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

  bot.user.setGame('/how. Still in WIP!', 'https://www.twitch.tv/pdnghia')
   
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(!message.startsWith(botconfig.prefix)) return; 
  
  if (talkedRecently.has(message.author.id)) {
   
            message.channel.send("shadup everyone is sleeping. wait 1 min so we can talk a again");

    } else {
      let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
});

bot.login(process.env.TOKEN);
