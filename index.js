const Discord = require('discord.js');
const bot = new Discord.Client();
const YTDL = require("ytdl-core");

var prefix = "/"

var ball = [
    "oh yes",
    "maybe",
    "no u",
    "is this a kid",
    "i don give a fuc",
    "despacito 2 comfrimed",
    "i dont know",
]
function play(connection, message){
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.quene[0],{filter: "audioonly"}));

    server.quene.shift();

    server.dispatcher.on("end",function(){
       if (server.quene[0]) play(connection, message);
       else connection.disconnect();
    });
}
var servers = {};
bot.on("ready",function() {
    console.log("Cool! My bot is ready!")
    bot.user.setGame("help/. Stil WIP!")
})


bot.on('message', (message) => {
    if (message.author.equals(bot.name)) return;

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");
    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage("pong");
        break;
        case "pong":
        message.channel.sendMessage("ping");
        break;
        case "info":
        message.channel.sendMessage("I am TheIdiotBot, the bot that actually idiot maded by pdnghiaqoi!");
        break;
        case "8balls":
        if (args[1]) message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
        else message.channel.sendMessage("wait what did u say again?");
        case "loader":
        message.channel.sendMessage("Your loader is require(992103297). Thank you for using us!")
        break;
        case "help":
        var embed = new Discord.RichEmbed()
           .addField("/help", "Show this.")
           .addField("/info", "Show the info of this bot.")
           .addField("/loader", "Show the loader of our admin.")
           .addField("/8balls", "Let the 8 balls answer your question!")
           .addField("/ping", "ping pong")
           .addField("/pong", "pong ping")
           .setColor(0x00FFFF)
           .setFooter("List of commands")
        message.channel.sendEmbed(embed);
        break;
        case "snd":
        if (!args[1]) {
            message.channel.sendMessage("hmmm...no link?")
        }

        if (!message.member.voiceChannel) {
            message.channel.sendMessage("wait a min... voice channel pls?")
        }

        if (!servers[message.guild.id]) servers[message.guild.id] = {
            quene: []
        };
        var server = servers[message.guild.id];
        
        server.quene.push(args[1]);

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
        });
        break;
        case "skip":
        var server = servers[message.guild.id];

        if (server.dispatcher) server.dispatcher.end();
        break;
        case "stop":
        var server = servers[message.guild.id];
        if (message.guild.voiceConnection)
        {
            for (var i = server.queue.length - 1; i >= 0; i--) 
            {
                server.queue.splice(i, 1);
         }
            server.dispatcher.end();
            console.log("[" + new Date().toLocaleString() + "] Stopped the queue.");
        } break;
        default:
        message.channel.sendMessage("Invaild commands! ourbotisgettinginvailded");
        break;

    }



});

bot.login(process.env.TOKEN);
