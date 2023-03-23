/*
message.channel.send(`<:9358_yes_tick:752308386623782943> | ${user} ne figure plus dans la blacklist`)
*/
const Discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "unowner",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
  if(message.author.id !== config.OWNER_ID) return 
  let user = message.mentions.members.first()
  if(!user) return 
  let owner = db.fetch(`owner_${message.author.id}`)
  if(owner === 0 || owner === null) return message.channel.send(`${user} n'était pas owner`)
  message.channel.send(`${user} n'est plus owner`)
  db.set(`owner_${user.id}`, 0)

}
  }