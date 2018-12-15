const Discord = require("discord.js");
const bot = new Discord.Client();
module.export = class prefix {

}
const prefix = "!"

bot.on('message', message => {
    if (message.content === prefix + "help"){
      return message.channel.send("liste des commandes: \n \n !musique : pour écouter ce que tu veux \n !epic : pour avoir mon id epic");
    }
  })

bot.on('message', message => {
    if (message.content === prefix + "epic"){
      return message.channel.send("Mon epic se trouve dans le chemin épinglé du serv !");
    }
  })