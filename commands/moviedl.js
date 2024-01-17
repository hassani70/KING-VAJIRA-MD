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
            let search = await yts(text);
            let anu = search.videos[0];
            let urlYt = anu.url
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`;
            };
                let infoYt = await ytdl.getInfo(urlYt);
                if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
            citel.reply('_Download Your Movie_')
	    citel.reply('_Uploading your Movie_')
	    	
                const stream = ytdl(urlYt, {
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
			    image: {
                    url: anu.thumbnail,
               },
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: 'document/mp4',
                        fileName: `${titleYt}.mp4`,
                        caption: `───────➢───────
 🎧𝕂𝕀ℕ𝔾 𝕍𝔸𝕁𝕀ℝ𝔸🎧
┋👩‍🎨 ${tlang().title} 
┋🚨 *Youtube Player* ✨
  ╼━━━━━➢━━━━━━╾
┋🗒️ *Title:* ${anu.title}

┋⏳ *Duration:* ${anu.timestamp}
┋👀 *Viewers:* ${anu.views}
┋📤 *Uploaded:* ${anu.ago}
┋🧑‍🎤 *Author:* ${anu.author.name}
┋⬇️ Upload To Song
 ───────➢────────
⦿ *Url* : ${anu.url}`,                        
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                                title: titleYt,
                                body: citel.pushName,
                                thumbnail: await getBuffer(search.all[0].thumbnail),
                                renderLargerThumbnail: true,
				mediaUrl: search.all[0].thumbnail
                                
                            }
                        }
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);
                } else {
                    citel.reply(`❌ File size bigger than 100mb.`);
                }
                return fs.unlinkSync(`./${randomName}`);      


        }
    )

//---------------------------------------------------------------------------

cmd({
    pattern: "movie2",
    react: "⬇️",
       desc: "Downloads video from yt.",
       category: "downloader",
       filename: __filename,
       use: '<faded-Alan Walker>',
   },
   async(Void, citel, text) => {
       let yts = require("secktor-pack");
       let search = await yts(text);
       let anu = search.videos[0];
       let urlYt = anu.url
       const getRandom = (ext) => {
           return ${Math.floor(Math.random() * 10000)}${ext};
       };
           let infoYt = await ytdl.getInfo(urlYt);
           if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(❌ Video file too big!);
           let titleYt = infoYt.videoDetails.title;
           let randomName = getRandom(".mp4");
            citel.reply('_Download Your Video_')
            citel.reply('_Upload Your Video_')

           const stream = ytdl(urlYt, {
                   filter: (info) => info.itag == 22 || info.itag == 18,
               })
               .pipe(fs.createWriteStream(./${randomName}));
           await new Promise((resolve, reject) => {
               stream.on("error", reject);
               stream.on("finish", resolve);
           });
           let stats = fs.statSync(./${randomName});
           let fileSizeInBytes = stats.size;
           let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
           if (fileSizeInMegabytes <= dlsize) {
               Void.sendMessage(citel.chat, {
                 image: {url: (search.all[0].thumbnail)},
                 caption: `╔───────────────◆
┊🧚 ${titleYt} 
┊🚨 *Youtube Downloader* ✨
┊ ┉━━━━◭☬◮━━━━━┉
┊🌐 *Duration:* ${anu.timestamp}
┊👀 *Viewers:* ${anu.views}
┊⬆️ *Uploaded:* ${anu.ago}
┊👽 *Author:* ${anu.author.name}
╚────────────────◆
⦿ *Url* : ${anu.url}`
               }, { quoted: citel })
               let buttonMessage = {
                   document: fs.readFileSync(./${randomName}),
                   mimetype: 'document/mp4',
                   fileName: ${titleYt}.mp4,
                   caption: ★[KING VAJIRA MD]★ 
               }
            Void.sendMessage(citel.chat, buttonMessage)
            return fs.unlinkSync(./${randomName});
           } else {
               citel.reply(`❌ File size bigger than 100mb.`);
           }
           return fs.unlinkSync(`./${randomName}`);      


   }
)


