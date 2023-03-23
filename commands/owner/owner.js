
const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "owner",
  category: "owner",
  usage: "owner <@utilisateur>",
  description: "Ajoute une personne au rang d'Owner",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
  if(message.author.id !== config.OWNER_ID) return 
  let user = message.mentions.members.first()
  if(!user) return 
  let staff = db.fetch(`owner_${user.id}`)
  if(staff === 1) return message.channel.send(`${user} est déjà owner`)
  message.channel.send(`${user} est maintenant owner`)
  db.add(`owner_${user.id}`, 1)
}


  }