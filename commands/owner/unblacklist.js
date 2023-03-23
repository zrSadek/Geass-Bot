  
  const discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "unblacklist",
  aliases: ["unbl"],
  category: "owner",
  usage: "unblacklist <id de l'utilisateur>",
  description: "Unblacklist une personne du bot",
  run: async (client, message, args) => {

  let staffc = await db.fetch(`staff_${message.author.id}`)
  if(staffc === 0 || staffc === null) return 

  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
let gbanid = args.join(" ").slice(0);
if(!gbanid) return
//var blacklistlist = new db.table('blacklisted_user')
db.set(`blacklist_user_${gbanid}`, 0)
db.set(`blacklist_raison_${gbanid}`, 'null')

message.channel.send(`<@${gbanid}> vient de se faire unblacklist`)
  }}