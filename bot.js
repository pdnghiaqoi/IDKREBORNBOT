const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
})


bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content == 'loader/'){
        message.channel.sendMessage('```Your loader is: require(992103297). Thank you for using us!\n(You can go into #loader to get the loader of this admin!```');
    }
    if (message.content == 'ping'){
        message.channel.sendMessage('pong');
    }
    if (message.content == 'pong'){
        message.channel.sendMessage('ping');
    }
    if (message.content == 'hi idiot'){
        message.channel.sendMessage('o hello dere');
    }
});

bot.login(process.env.BOT_TOKEN);
