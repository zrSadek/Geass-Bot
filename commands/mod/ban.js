const discord = require("discord.js");
const db = require(`quick.db`)
const config = require("../../config.json")

module.exports = {
  name: "ban",
  category: "modération",
  description: "Banni l'utilisateur souhaiter",
  usage: "ban <@utilisateur> <raison>",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour ban ${user}`)
    }
    
    const target = message.mentions.members.first();
    let owner =  db.fetch(`owner_${target.id}`)
  
    if(owner == 1 || target.id == config.OWNER_ID) return message.channel.send(`:x: Vous ne pouvez pas bannir un owner`)
    if(!target) {
      return 
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour ban ${message.mentions.users.first().username}`)
    }
    
    
   message.channel.send(`${target} vient de se faire **ban**`)
    target.ban()
    
    
    
  }
}
