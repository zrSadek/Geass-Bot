module.exports = {
    name: "unmute",
    category: "modération",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return 
        
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`Je n'ai pas les permissions nécessaires pour unmute ${message.mentions.users.first().username}`);
      }
  
      const user = message.mentions.members.first();
  
      if (!user) {
        return
      }
      
      let muterole = message.guild.roles.cache.find(x => x.name === "Muet")
      
      
   if(user.roles.cache.has(muterole)) {
        return message.channel.send(`${message.mentions.users.first().username} n'était pas mute`)
      }
      
      
      user.roles.remove(muterole)
      
      await message.channel.send(`${message.mentions.users.first().username} a été **unmute**`)
      
      user.send(`Vous avez été **unmute** sur ${message.guild.name}`)
  
    }
  };