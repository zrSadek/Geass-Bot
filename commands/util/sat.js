const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const db = require("quick.db")
module.exports = {
  name: "say",
  description: "Envoie le message voulu",
  usage: "say <message voulu>",
  category: "autre",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }
    message.delete()

  if (!message.member.permissions.has("ADMINISTRATOR"))
    return
    var args = message.content.split(' ').join(' ').slice(4);
    if (!args) return 
    message.channel.send(`${args}`)
  }
};