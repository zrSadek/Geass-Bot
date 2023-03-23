const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "modération",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("<:error:787789097707896832> | Vous n'avez pas les permissions nécessaires")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return 
    }
    
    if(message.mentions.users.first().bot) {
      return 
    }
    
    if(message.author.id === user.id) {
      return
    }
    
    const reason = args.slice(1).join(" ")
    
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Vous avez été **warn** sur ${message.guild.name}`)
      await message.channel.send(`${message.mentions.users.first().username} à été **warn**`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Vous avez été **warn** sur ${message.guild.name}`)
      await message.channel.send(`${message.mentions.users.first().username} à été **warn**`)
    }
    
  } 
}