
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");
const prefix = "$";
client.on('ready', () => {
    client.user.setGame(`!~[ Commands | $help ]~!`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });

client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
}); 



