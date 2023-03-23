
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "Permet de mute les gens qui ne respecte pas les règles",
  category: "modération",
  usage: "mute <@mention> <raison>",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return 
      
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour mute ${message.mentions.users.first().username}`);
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      return
    }
    
    if(user.id === message.author.id) {
      return message.channel.send(`Je n'ai pas les permissions nécessaires pour mute ${message.mentions.users.first().username}`);
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return 
    }
    
  //TIME TO LET MUTED ROLE
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muet")
    
    
      if(!muterole) {
      return message.channel.send("Se serveur ne possède pas de role `Muet`, merci de le créer")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return 
    }
    
  
    
    
    user.roles.add(muterole)
    
    await message.channel.send(`${message.mentions.users.first().username} a été **mute**`)
    
user.send(`Vous avez été **mute** sur ${message.guild.name}`)

    
//WE ARE DONE HERE 
    
  }
};