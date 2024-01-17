const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 36000 // 300 min
var dlsize = 1000 // 1000mb

  //---------------------------------------------------------------------------

cmd({
            pattern: "movie",
            react: "🎞️",
            alias :"film",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack"); 
let textYt;        
if (text.startsWith("https://youtube.com/shorts/")) {
  const svid = text.replace("https://youtube.com/shorts/", "https://youtube.com/v=");
  const s2vid = svid.split("?feature")[0];
  textYt = s2vid;
} else {
  textYt = text;
}
            let search = await yts(textYt);
            let anu = search.videos[0];
                       let buttonMessaged ={
             image: {
                    url: anu.thumbnail,
               },
                caption: `

🎧 𝗞𝗜𝗡𝗚 𝗩𝗔𝗝𝗜𝗥𝗔 𝗠𝗢𝗩𝗜𝗘 🎧

🚨 *Youtube Player* 🌿
 ◨┉━━━━╚◭☬◮╝━━━━━┉◧

╏🎀 *Title:* ${anu.title}
⦁
╏🌐 *Duration:* ${anu.timestamp}
⦁
╏👀 *Viewers:* ${anu.views}
⦁
╏⬆️ *Uploaded:* ${anu.ago}
⦁
╏👽 *Author:* ${anu.author.name}
⦁
╏📡 *Url* : ${anu.url}

◯┉━━┅━━━━━━━━━━┅━━━┉◯
*ඔබට අවශය අංකය පහතින් තෝරා මෙයට tag කර එවන්න*
┈─┈──┈─◈❁◈─┈─┈─┈─◍

*5.1 ╏ MP4 VIDEO* 📽️
*6.1 ╏ MP4 DOCUMENT* 📂



*👑 ©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👑* 
`,
                footer: tlang().footer,
                headerType: 4,
            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,
            });

            

            


        }
    )
cmd({
            pattern: "5",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
  var msg = citel
	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝗞𝗜𝗡𝗚 𝗩𝗔𝗝𝗜𝗥𝗔 𝗩𝗜𝗗𝗘𝗢 🎧'))  return 
text = text.split('╏📡 *Url* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "⬇️", key: msg.key } } )		// denna one react eka
 const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(text);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(text, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        caption:`✅ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ ✅`,   
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      

            
		
 })


cmd({
            pattern: "6",
            react: "",
            alias :[],
            desc: "",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
  var msg = citel
	
if(!msg.quoted) return 
if (!msg.quoted.isBaileys ) return 
if(!msg.quoted.caption) return console.log('ew')
text = msg.quoted.caption
if (!text.includes('🎧 𝗞𝗜𝗡𝗚 𝗩𝗔𝗝𝗜𝗥𝗔 𝗩𝗜𝗗𝗘𝗢 🎧'))  return 
text = text.split('╏📡 *Url* : ')[1].split('\n')[0]		
if(!text) return 
await Void.sendMessage(citel.chat, { react: {  text: "⬇️", key: msg.key } } )		// denna one react eka
 const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(text);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
             //   citel.reply('*Downloadig:* '+titleYt)
                const stream = ytdl(text, {
                        filter: (info) => info.itag == 22 || info.itag == 18,
                    })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                let stats = fs.statSync(`./${randomName}`);
                let fileSizeInBytes = stats.size;
                let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
                if (fileSizeInMegabytes <= dlsize) {
                    let buttonMessage = {
                         document: fs.readFileSync(`./${randomName}`),
                        mimetype: 'document/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `✅ *ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ* ✅`,  
		    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      

            
		
 })
