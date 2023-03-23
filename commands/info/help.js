const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db")
const { default_prefix } = require("../../config.json")
const config = require("../../config.json")
const pagination = require('discord.js-pagination');
module.exports = {
  name: "help",
  description:
    "Obtenir toutes les commandes du bot",
  usage: "help <commande>",
  category: "info",
  run: async (client, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`)
   if(prefix == null) {
    prefix =  config.DEFAULT_PREFIX
  }

let color =  db.fetch(`config_couleur_${message.guild.id}`)

  var moderation = new discord.MessageEmbed()
  .setTitle(`Modération`)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .setColor(color)
  .addField(`\`${prefix}sanctions <membre>\``, `Affiche les sanctions reçues par un membre`)
  .addField(`\`${prefix}clear-sanctions <membre>\``, `Supprime toutes les sanctions d'un membre`)
  .addField(`\`${prefix}slowmode <durée>\``, `Change la durée du mode lent sur un salon (max 6h)`)
  .addField(`\`${prefix}clear [nombre]\``, `Supprime le nombre de messages donnés dans le salon actuel. Si un membre est précisé, seul ses messages sont supprimés`)
  .addField(`\`${prefix}renew/purge/nuke\``, `Supprime et recrée le salon`)
  .addField(`\`${prefix}warn <membre> [raison]\``, `Donne un warn à un membre, une raison peut être précisée`)
  .addField(`\`${prefix}mute <membre> [raison]\``, `Mute un membre, une raison peut être précisée`)
  .addField(`\`${prefix}unmute <membre>\``, `Met fin au mute d'un membre`)
  .addField(`\`${prefix}kick <membre> [raison]\``, `Expulse un ou plusieurs membres du serveur, une raison peut être précisée`)
  .addField(`\`${prefix}ban <membre> [raison]\``, `Bannit un ou plusieurs membres du serveur, une raison peut être précisée`)
  .addField(`\`${prefix}lock <on/off>\``, `Ferme ou ouvre complètement un salon textuel`)

  var gestion = new discord.MessageEmbed()
  .setTitle(`Server gestion`)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .setColor(color)
  .addField(`\`${prefix}giveaway\``, `Affiche un menu interactif pour créer un giveaway`)
  .addField(`\`${prefix}reroll\``, `Rejoue le dernier giveaway du serveur :x:`)
  .addField(`\`${prefix}soutien\``, `Configure le soutien statut :x:`)
  .addField(`\`${prefix}embed\``, `Affiche un générateur d'embed interactif :x:`)
  .addField(`\`${prefix}create [émoji] [nom]\``, `Crée un émoji custom sur le serveur, à partir d'un émoji nitro`)
  .addField(`\`${prefix}tempvoc\``, `Affiche un menu interactif pour gérer les vocaux temporaires sur le serveur :x:`)
  

  var logs = new discord.MessageEmbed()
  .setTitle(`Logs`)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .setColor(color)
  .addField(`\`${prefix}logs on/off\``, `Active/désactive les logs vocaux/message/join/leave`)
  .addField(`\`${prefix}raidlog on/off\``, `Active/désactive les logs de l'antiraid dans un salon`)

  var botcontrol = new discord.MessageEmbed()
  .setTitle(`Bot control`)
  .setColor(color)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .addField(`\`${prefix}setname <nom>\``, `Permet de modifier le nom du bot`)
  .addField(`\`${prefix}setavatar <lien avatar>\``, `Permet de modifier la photo de profile du bot`)
  .addField(`\`${prefix}theme <couleur>\``, `Permet de Modifier la couleur des embeds`)
  .addField(`\`${prefix}server-list\``, `Affiche la liste des serveurs où se trouve le bot`)
  .addField(`\`${prefix}stream/watch/play/listen <texte>\``, `Permet de changer le status du bot`)
  .addField(`\`${prefix}owner <@membre>\``, `Permet d'ajouter quelqu'un a la liste d'owners (seulement pour le "vrai" owner)`)
  .addField(`\`${prefix}unowner <@membre>\``, `Permet de supprimer quelqu'un de la liste d'owners (seulement pour le "vrai" owner)`)
  .addField(`\`${prefix}wl <@membre>\``, `Ajoute quelqu'un à la whitelist d'un serveur, il ne sera plus affecté par l'antiraid :x:`)
  .addField(`\`${prefix}unwl <@membre>\``, `Retire quelqu'un de la whitelist d'un serveur :x:`)
  .addField(`\`${prefix}blacklist <on/off>\``, `Permet d'activé/désactivé la blacklist`)
  .addField(`\`${prefix}blacklist <mention>\``, `Permet de blacklist quelqu'un du bot :x:`)
  .addField(`\`${prefix}unblacklist <id>\``, `Permet de unblacklist quelqu'un du bot :x:`)

  var util = new discord.MessageEmbed()
  .setTitle(`Utilitaire`)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .setColor(color)
  .addField(`\`${prefix}help\``, `Affiche un message d'aide`)
  .addField(`\`${prefix}pic\``, `Active/désactive les logs des messages supprimés et édités dans un salon`)
  .addField(`\`${prefix}server-pic\``, `Active/désactive les logs de l'activité vocale dans un salon`)
  .addField(`\`${prefix}snipe\``, `Affiche le dernier message supprimé du salon`)
  .addField(`\`${prefix}speed\``, `Affiche la vitesse de réaction du bot`)

  var ar = new discord.MessageEmbed()
  .setTitle(`Antiraid`)
  .setDescription(`ζ͜͡Geass Bots・Prefix actuel : ${prefix}`)
  .setColor(color)
  .addField(`\`${prefix}config\``, `Affiche les paramètres de l'antiraid sur le serveur`)
  .addField(`\`${prefix}antipub <on/off>\``, `Active/désactive l'anti pub `)
  .addField(`\`${prefix}antiwebhook <on/off>\``, `Active/désactive l'antiwebhook`)
  .addField(`\`${prefix}antibot\``, `Active/désactive l’anti bot`)


  var info = new discord.MessageEmbed()
  .setTitle(`Informations`)
  .setDescription(`Le bot est pour l'instant en bêta il y a pas mal de commandes disponibles.\nLes commandes avec un :x: à côté sont désactivées ou non disponibles.`)
  .setColor(color)

  const pages = [
  moderation,
  logs,
  gestion,
  botcontrol,
  ar,
  util,
  info,
  
]

const emojiList = ["◀", "▶"];

const timeout = '120000';

pagination(message, pages, emojiList, timeout)

  }
};