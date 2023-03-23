const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "modération",
  description: "Explulse le joueur voulu",
  usage: "kick <@utilisateur> <raisons>",
  run: (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour kick ${message.mentions.users.first().username}`)
    }
    
    let target = message.mentions.members.first();
    
    if(!target) {
      return 
    }
    
    if(target.id === message.author.id) {
     return message.channel.send(`Je n'ai pas les permissions nécessaires pour mute ${message.mentions.users.first().username}`)
    }
    

 message.channel.send(`${target} a été **kick**`)

    
    
    target.kick(args[1]);
    
    
    
  }
}