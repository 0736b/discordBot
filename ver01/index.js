const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));





const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.GUILD_VOICE_STATES] });
const { DiscordTogether } = require('discord-together');
client.discordTogether = new DiscordTogether(client);




const kumDar = [" นี่รู้อะไรบ้าง"," นี่ไม่รู้เรื่องเล๊ยยย", " นี่ไหวป่าววะ"];

const helpCommand = (message) => {
  if (message.content === '-hp'){
    let nickname = message.member ? message.member.displayName : null;
    const helpEmbed = new MessageEmbed()
      .setColor('#FFD700')
      .setTitle("สารพัดบูม's คำสั่ง & วิธีการใช้งาน")
      .setDescription('Status: (still in progress)')
      .addFields(
		{ name: 'โปรดอ่าน', value: 'ก่อนใช้งาน 5 คำสั่งด้านล่างต้องเข้า ห้องพูดคุย ก่อน' },
    { name: 'คำสั่ง -yt ', value: 'ดู Youtube ร่วมกันใน ห้องพูดคุย', inline: false },
    { name: 'คำสั่ง -fs ', value: 'เล่นเกมส์ Fishington.io ในห้องพูดคุย', inline: false },
    { name: 'คำสั่ง -pk ', value: 'เล่นเกมส์ Poker Night ในห้องพูดคุย', inline: false },
    { name: 'คำสั่ง -ch ', value: 'เล่นเกมส์ Chess in the park ในห้องพูดคุย', inline: false },
    { name: 'คำสั่ง -bta ', value: 'เล่นเกมส์ Betrayal ในห้องพูดคุย', inline: false })
      .setTimestamp()
      .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
    message.channel.send({ embeds: [helpEmbed] });
  }
}

const YTogether = (message) => {
          if (message.content === '-yt') {
          let msgMemVoice = message.member.voice.channel;
          if(msgMemVoice){
        client.discordTogether.createTogetherCode(msgMemVoice.id, 'youtube').then(async invite => {
          let nickname = message.member ? message.member.displayName : null;
            const exampleEmbed = new MessageEmbed()
                .setColor('#00FF7F')
                .setTitle(`Youtube Together สำหรับห้องพูดคุย ${msgMemVoice.name} เท่านั้น!`)
                .setURL(`https://discord.gg/${invite.code.replace('https://discord.com/invite/', '')}`)
                .setDescription('คลิกที่ตัวหนังสือสีฟ้าเพื่อใช้งาน')
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png')
                .setTimestamp()
                .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
            message.channel.send({ embeds: [exampleEmbed] });
        });
        }
        else{
          let nickname = message.member ? message.member.displayName : null;
          const errorEmbed = new MessageEmbed()
          .setColor('#DC143C')
          .setTitle("กรุณาเข้าร่วม ห้องพูดคุย ก่อนใช้งานคำสั่ง")
          .addFields(
		        { name: 'โปรดอ่าน', value: 'พิมพ์คำสั่ง -hp เพื่อดู วิธีการใช้งาน และ คำสั่งทั้งหมด' })
          .setTimestamp()
          .setFooter('ไอ้เหี้ย ' + nickname + kumDar[Math.floor(Math.random()*kumDar.length)], message.author.avatarURL());
          message.channel.send({ embeds: [errorEmbed] });
        }
        }
}


const FTogether = (message) => {
          if (message.content === '-fs') {
          let msgMemVoice = message.member.voice.channel;
          if(msgMemVoice){
        client.discordTogether.createTogetherCode(msgMemVoice.id, 'fishing').then(async invite => {
          let nickname = message.member ? message.member.displayName : null;
            const exampleEmbed = new MessageEmbed()
                .setColor('#1E90FF')
                .setTitle(`Fishington.io สำหรับห้องพูดคุย ${msgMemVoice.name} เท่านั้น!`)
                .setURL(`https://discord.gg/${invite.code.replace('https://discord.com/invite/', '')}`)
                .setDescription('คลิกที่ตัวหนังสือสีฟ้าเพื่อใช้งาน')
                .setThumbnail('https://kevin.games/assets/images/new/fishington-io.jpg')
                .setTimestamp()
                .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
            message.channel.send({ embeds: [exampleEmbed] });
        });
        }
        else{
          let nickname = message.member ? message.member.displayName : null;
          const errorEmbed = new MessageEmbed()
          .setColor('#DC143C')
          .setTitle("กรุณาเข้าร่วม ห้องพูดคุย ก่อนใช้งานคำสั่ง")
          .addFields(
		        { name: 'โปรดอ่าน', value: 'พิมพ์คำสั่ง -hp เพื่อดู วิธีการใช้งาน และ คำสั่งทั้งหมด' })
          .setTimestamp()
          .setFooter('ไอ้เหี้ย ' + nickname + kumDar[Math.floor(Math.random()*kumDar.length)], message.author.avatarURL());
          message.channel.send({ embeds: [errorEmbed] });
        }
        }
}


const PTogether = (message) => {
          if (message.content === '-pk') {
          let msgMemVoice = message.member.voice.channel;
          if(msgMemVoice){
        client.discordTogether.createTogetherCode(msgMemVoice.id, 'poker').then(async invite => {
          let nickname = message.member ? message.member.displayName : null;
            const exampleEmbed = new MessageEmbed()
                .setColor('#4B0082')
                .setTitle(`Poker Night สำหรับห้องพูดคุย ${msgMemVoice.name} เท่านั้น!`)
                .setURL(`https://discord.gg/${invite.code.replace('https://discord.com/invite/', '')}`)
                .setDescription('คลิกที่ตัวหนังสือสีฟ้าเพื่อใช้งาน')
                .setThumbnail('https://i.ytimg.com/vi/6BZ3i5c7Zuo/maxresdefault.jpg')
                .setTimestamp()
                .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
            message.channel.send({ embeds: [exampleEmbed] });
        });
        }
        else{
          let nickname = message.member ? message.member.displayName : null;
          const errorEmbed = new MessageEmbed()
          .setColor('#DC143C')
          .setTitle("กรุณาเข้าร่วม ห้องพูดคุย ก่อนใช้งานคำสั่ง")
          .addFields(
		        { name: 'โปรดอ่าน', value: 'พิมพ์คำสั่ง -hp เพื่อดู วิธีการใช้งาน และ คำสั่งทั้งหมด' })
          .setTimestamp()
          .setFooter('ไอ้เหี้ย ' + nickname + kumDar[Math.floor(Math.random()*kumDar.length)], message.author.avatarURL());
          message.channel.send({ embeds: [errorEmbed] });
        }
        }
}


const CTogether = (message) => {
          if (message.content === '-ch') {
          let msgMemVoice = message.member.voice.channel;
          if(msgMemVoice){
        client.discordTogether.createTogetherCode(msgMemVoice.id, 'chess').then(async invite => {
          let nickname = message.member ? message.member.displayName : null;
            const exampleEmbed = new MessageEmbed()
                .setColor('#808000')
                .setTitle(`Chess In The Park สำหรับห้องพูดคุย ${msgMemVoice.name} เท่านั้น!`)
                .setURL(`https://discord.gg/${invite.code.replace('https://discord.com/invite/', '')}`)
                .setDescription('คลิกที่ตัวหนังสือสีฟ้าเพื่อใช้งาน')
                .setThumbnail('https://support.discord.com/hc/article_attachments/4404615637015/chess_banner.png')
                .setTimestamp()
                .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
            message.channel.send({ embeds: [exampleEmbed] });
        });
        }
        else{
          let nickname = message.member ? message.member.displayName : null;
          const errorEmbed = new MessageEmbed()
          .setColor('#DC143C')
          .setTitle("กรุณาเข้าร่วม ห้องพูดคุย ก่อนใช้งานคำสั่ง")
          .addFields(
		        { name: 'โปรดอ่าน', value: 'พิมพ์คำสั่ง -hp เพื่อดู วิธีการใช้งาน และ คำสั่งทั้งหมด' })
          .setTimestamp()
          .setFooter('ไอ้เหี้ย ' + nickname + kumDar[Math.floor(Math.random()*kumDar.length)], message.author.avatarURL());
          message.channel.send({ embeds: [errorEmbed] });
        }
        }
}

const BTogether = (message) => {
          if (message.content === '-bta') {
          let msgMemVoice = message.member.voice.channel;
          if(msgMemVoice){
        client.discordTogether.createTogetherCode(msgMemVoice.id, 'betrayal').then(async invite => {
          let nickname = message.member ? message.member.displayName : null;
            const exampleEmbed = new MessageEmbed()
                .setColor('#808000')
                .setTitle(`Betrayal สำหรับห้องพูดคุย ${msgMemVoice.name} เท่านั้น!`)
                .setURL(`https://discord.gg/${invite.code.replace('https://discord.com/invite/', '')}`)
                .setDescription('คลิกที่ตัวหนังสือสีฟ้าเพื่อใช้งาน')
                .setThumbnail('https://cdn.titotu.io/images/games/betrayal-io-1223x688.jpg')
                .setTimestamp()
                .setFooter('เรียกใช้โดย ' + nickname, message.author.avatarURL());
            message.channel.send({ embeds: [exampleEmbed] });
        });
        }
        else{
          let nickname = message.member ? message.member.displayName : null;
          const errorEmbed = new MessageEmbed()
          .setColor('#DC143C')
          .setTitle("กรุณาเข้าร่วม ห้องพูดคุย ก่อนใช้งานคำสั่ง")
          .addFields(
		        { name: 'โปรดอ่าน', value: 'พิมพ์คำสั่ง -hp เพื่อดู วิธีการใช้งาน และ คำสั่งทั้งหมด' })
          .setTimestamp()
          .setFooter('ไอ้เหี้ย ' + nickname + kumDar[Math.floor(Math.random()*kumDar.length)], message.author.avatarURL());
          message.channel.send({ embeds: [errorEmbed] });
        }
        }
}


client.on('ready', () => {
    console.log('สารพัดบูม is online!');
    client.user.setStatus('available')
    client.user.setActivity('พิมพ์ -hp เพื่อดูคำสั่ง')
})

client.on("guildUpdate", function(oldGuild, newGuild){
    console.error(`a guild is updated`);
});

client.on('message', message => {
    YTogether(message);
    FTogether(message);
    PTogether(message);
    CTogether(message);
    BTogether(message);
    helpCommand(message);

})

client.login(process.env.TOKEN);