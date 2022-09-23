
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");
const prefix = "$";
client.on('ready', () => {
    client.user.setGame(`!~[ Commands | $help ]~!`,"http://twitch.tv/y04zgamer")
    client.user.setStatus("dnd")
 });





client.login(process.env.BOT_TOKEN);
