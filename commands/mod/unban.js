const discord = require("discord.js");

module.exports = {
  name: "unban",
  category: "modération",
  description: "Unban l'utilisateur souhaiter",
  usage: "unban <@utilisateur> <raison>",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour uban ${message.mentions.users.first().username}`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return 
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour unabn ${message.mentions.users.first().username}`)
    }
    
   
    
   if(!args[1]) {
     return 
   }
    
   message.channel.send(`${target} vient de se faire **unban**`)
   await message.guild.members.unban(user);
    
    
    
  }
}
