const discord = require("discord.js")
const config = require("../../config.json")
const db = require("quick.db")

module.exports = {
  name: "config",
  category: "info",
  usage: "config",
  description: "Permet de voir la configuration du bot sur le serveur",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
  let serveurid = message.guild.id;
var config_blacklist = db.get(`config_blacklist_${serveurid}`)
var config_webhook = db.get(`config_webhook_${serveurid}`)
var config_pub = db.get(`config_pub_${serveurid}`)
let blackembed = new discord.MessageEmbed()
.setTitle("Configuration du Serveur")
.setDescription(`**Fonction __BlackList__**: \`${config_blacklist}\`\n**Fonction __AntiWebhook__**: \`${config_webhook}\`\n**Fonction __AntiLink__**: \`${config_pub}\`\n**Fonction __AntiRole__**: \`Désactivé\`\n**Fonction __AntiChannel__**: \`Désactivé\``)
.setColor("#FF0000")
message.channel.send(blackembed)
  }}