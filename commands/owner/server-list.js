
const discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "server-list",
  aliases: ["serve"],
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

  let owner =  db.fetch(`owner_${message.author.id}`)

  let color =  db.fetch(`config_couleur_${message.guild.id}`)

  if(owner === 0 || owner === null || message.author.id !== config.OWNER_ID) return

  client.guilds.cache.map((guild) => {

  let embeda = new MessageEmbed()
  .setTitle(`Liste des serveurs`)

  let embed = new MessageEmbed()
  .setDescription(`${guild.name} [${client.guilds.cache.size}]\nID: ${guild.id}`)
  .setColor(color)
    message.channel.send(embed)
  })

}


  }