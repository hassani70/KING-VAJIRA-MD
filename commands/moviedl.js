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
		  let thumbnaill = search.all[0].thumbnail; 
   let caption = `✍️title : ${search.all[0].title}
   
 📝 description : ${search.all[0].description}
  
 🖇️ url: ${search.all[0].url}
  
 📚 Author: ${search.all[0].author}
  
 ⏳ duration: ${search.all[0].duration}
  
 🧑‍💻 type :
  .video ${search.all[0].url}  to get video`
  
  let butnMessage = {
                        image: {
                            url: thumbnaill,
                        },
                        caption: caption,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, butnMessage, {
                        quoted: citel,
                    });
await sleep(2000);
                    let buttonMessage = {
			    
                        document: fs.readFileSync(`./${randomName}`),
                        mimetype: 'document/mp4',
                        fileName: `${titleYt}.mp4`,    
			caption: `*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 𝙑𝘼𝙅𝙄𝙍𝘼 📥*`,
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
             pattern: "video2", 
            alias :['විඩියො','vd'],
             desc: "Downloads video from yt.", 
             category: "downloader", 
             filename: __filename, 
             use: '<faded-Alan Walker>', 
         }, 
         async(Void, citel, text) => { 
 Void.sendMessage(citel.chat, {  
               react: {  
                   text: "🎥",  
                   key: citel.key  
               }  
           })  
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
                 citel.reply('🔎 ඔබේ ගීතය සොයමින් පවතී.') 
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
  let thumbnaill = search.all[0].thumbnail; 
   let caption = `✍️title : ${search.all[0].title}
   
 📝 description : ${search.all[0].description}
  
 🖇️ url: ${search.all[0].url}
  
 📚 Author: ${search.all[0].author}
  
 ⏳ duration: ${search.all[0].duration}
  
 🧑‍💻 type :
  .video ${search.all[0].url}  to get video`
  
  let butnMessage = {
                        image: {
                            url: thumbnaill,
                        },
                        caption: caption,
                        headerType: 4,
                    };
                    Void.sendMessage(citel.chat, butnMessage, {
                        quoted: citel,
                    });
await sleep(2000);
                         let buttonMessage = {  
                          document: fs.readFileSync(`./${randomName}`),
                          jpegThumbnail: log0,
                          mimetype: 'document/mp4',  
                          fileName: `${titleYt}.mp4`, 
                          caption: `*📥 𝙐𝙋𝙇𝙊𝘼𝘿𝙀𝘿 𝘽𝙔 𝙑𝘼𝙅𝙄𝙍𝘼 📥*`, 
                      }  
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel }); 
  
                  return fs.unlinkSync(`./${randomName}`); 
                 } else { 
                     citel.reply(`❌ File size bigger than 100mb.`); 
                 } 
                 return fs.unlinkSync(`./${randomName}`);       
  
  
         } 
     )
