const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "server-pic",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)

const embed = new MessageEmbed()
.setTitle(`${message.guild.name}`)
.setImage(message.guild.iconURL({dynamic : true ,     size: 1024,}))
.setColor(color)
message.channel.send(embed)


  }
};