const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!"

bot.on('ready',function (){
  console.log("Bot Prêt")
})
bot.on('guildMenberAdd', function (member) {
   member.createDM().then(function (channel) {
    return channel.send('Bienvenue sur le serv ' + member.displayName + member.inviter)
  }).catch(console.error)  
})

bot.on('message', message => {
  if (message.content === prefix + "help"){
    return message.channel.send("liste des commandes: \n \n !help : pour avoir plus d'infos \n !musique : pour écouter ce que tu veux");
  }
})
bot.login('NTIyNzc4NjkyODYzMjYyNzMw.DvWTtQ.Vf3pZOmyl-tpxSkZhvSeYX8lVP0')