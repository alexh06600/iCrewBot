const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = require ('./commands/help')

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
    prefix.action(message)
  }
})

bot.login('NTIyNzc4NjkyODYzMjYyNzMw.DvWTtQ.Vf3pZOmyl-tpxSkZhvSeYX8lVP0')