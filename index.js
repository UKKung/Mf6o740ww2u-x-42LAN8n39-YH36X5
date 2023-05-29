const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keepAlive = require("./server");

const client = new Client({
  checkUpdate: false,
});

const buttonOptions = [
  { label: 'call me maybe', url: 'https://www.youtube.com/watch?v=fWNaR-rxAic' },
  { label: 'what make you beautiful', url: 'https://www.youtube.com/watch?v=S3IQwuYX_ls' },
  { label: 'golden hour', url: 'https://www.youtube.com/watch?v=PEM0Vs8jf1w' },
  { label: 'ชอบหน้าหนาวที่มีเธอ', url: 'https://www.youtube.com/watch?v=wYUWlWchJ6A' },
  { label: 'fly me to the moon', url: 'https://www.youtube.com/watch?v=Ixi0sUpLVRc' },
];

client.on('ready', () => {
  console.log('get up now');
  setInterval(() => {
//    const randomButtonIndex = Math.floor(Math.random() * buttonOptions.length);
//    const randomButton = buttonOptions[randomButtonIndex];

    const r = new Discord.RichPresence()
      .setApplicationId('1067412960525439026')
      .setType('LISTENING')
      .setURL('https://zxvc.xyz')
      .setState('working on Roblox Studio')
      .setName('Yum Yum 💙')
      .setDetails('um')
      .setAssetsLargeImage('https://cdn.discordapp.com/attachments/899169665689997380/1111969171446698035/rei-ayanami-rei.gif')
      .setAssetsLargeText('lerning to play guitar')
      .setAssetsSmallImage('https://cdn.discordapp.com/attachments/899169665689997380/1112006387174735912/meme-anime.gif')
      .setAssetsSmallText('.')
      .addButton('ig: yukihira_ktzm', 'https://instagram.com/yukihira_ktzm/')
      .addButton('call me maybe', 'https://www.youtube.com/watch?v=fWNaR-rxAic');
      //.addButton(randomButton.label, randomButton.url);

    client.user.setActivity(r);
  }, 1000);
});

keepAlive();
client.login("token");

let name = "check work";
console.log(name);
