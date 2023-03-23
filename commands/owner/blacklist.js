const discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "blacklist",
  aliases: ["bl"],
  category: "owner",
  usage: "bl <@utilisateur> <raison>",
  description: "Blacklist une personne du bot",
  run: async (client, message, args) => {
  let staffc = await db.fetch(`staff_${message.author.id}`)
  if(staffc === 0 || staffc === null) return
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
let user = message.mentions.members.first()
if(!user) return 
let gbanraison = args.join(" ").slice(22);
if(!gbanraison) {
return message.channel.send(`Veuillez donnez une raison`)
}
//var blacklistlist = new db.table('blacklisted_user')
db.set(`blacklist_user_${user.id}`, 1)
db.set(`blacklist_raison_${user.id}`, gbanraison)

message.channel.send(`${client.user.username} vient de se faire blacklist`)
  }}