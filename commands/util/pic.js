const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "pic",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)

let Embed = new MessageEmbed();
let roles = [];
if (!message.mentions.users.first()) {
  message.member.roles.cache.forEach((role) => {
    roles.push(role.name);
  });
  Embed.setTitle(`${message.author.username}`);
  Embed.setImage(`${message.author.displayAvatarURL({  dynamic: true })}`);
  Embed.setColor(color)



  return message.channel.send(Embed);
} else {
  let User = message.mentions.members.first();
  User.roles.cache.forEach((role) => {
    roles.push(role.name);
  });
  Embed.setTitle(`${client.users.cache.get(User.id).username}`);
  Embed.setImage(`${client.users.cache.get(User.id).displayAvatarURL({  dynamic: true })}`);
  Embed.setColor(color)

  return message.channel.send(Embed);
}

  }
};