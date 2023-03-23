const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "setname",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)
let owner =  db.fetch(`owner_${message.author.id}`)

if(owner === 0 || owner === null || message.author.id !== config.OWNER_ID) return

if (args.length) {
 let str_content = args.join(" ")
 client.user.setUsername(str_content)
 .then(u => message.channel.send(`Nom d'utilisateur mise à jour `))
 .catch(e => { return message.channel.send(`Je ne peux pas changer de nom pour l'instant, veuillez réessayer dans 1 heure`); });
} else {
}

  }
};