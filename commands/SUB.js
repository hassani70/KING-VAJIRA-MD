const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 10000 // 1000mb

//---------------------------------------------------------------------------

cmd({
    pattern: "slsub",
    react: "📃",
    alias: ["srisub"],
    desc: "Search Sinhala Subtitles  from Web Site",
    category: "download",
    use: '.slsub',
    filename: __filename
},
async(Void, citel, text) => {
   if (!text) return citel.reply("❗ *Please enter movie name to download Subtitles*")
   let search = await subsearch(text)
   let anu = await subdl(search.results[0].link)
   let caption =`*KING VAJIRA SINHALA SUB DOWNLOADER*

📊 *Movie Title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${anu.results[0].link}

`
  await Void.sendMessage(from,{image:{url: latest.results.img },caption: maru + "*KING VAJIRA ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ*" },{ quoted: citel })
  await Void.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: citel })
} else {
citel.reply('🚫 *Error Accurated !!*');
}
return fs.unlinkSync(`./${randomName}`);     
})

  //---------------------------------------------------------------------------
  
cmd({
    pattern: "slsubsearch",
    react: "🔎",
    alias: ["subsearch","ssub","findsub","sublist"],
    desc: "Search All Subtitles  from Web Site",
    category: "search",
    use: '.technewsall',
    filename: __filename
},
async(Void, citel, text) => {
   if (!text) return citel.reply("❗ *Please enter movie name to Search Subtitles*")
   let search = await subsearch(text)
   let yt = '\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n'
   for (let anu of vid.results ) {
        yt += `📃 *${anu.no} - ${anu.title}*\n🔗 _Link : ${anu.url}_ \n\n\n`
    }
 await Void.sendMessage(from,{image:{url: "https://telegra.ph/file/d05c60fb40c1ab9f90600.jpg" },caption: yt + "*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ*" },{ quoted: citel })
} else {
citel.reply('⛔ *Error accurated !!*');
}
return fs.unlinkSync(`./${randomName}`);     
    
})

  //---------------------------------------------------------------------------

cmd({
    pattern: "subdlfromlink",
    react: "📃",
    alias: ["subdllink","subdl"],
    desc: "Download subtitles from Web Sites",
    category: "download",
    use: '.subdlfromlink',
    filename: __filename
},
async(Void, citel, text) => {
   if (!text) return citel.reply("❗ Please enter movie Link to download Subtitles*")
   if(!text.includes('baiscope')) return reply('🚫 *Please enter Valid Movie url*')
   let search = await subdl(search)
   let caption =`*KING VAJIRA SL SUBTITLES DOWNLOADER*

📊 *Movie title - ${latest.results.title}*

🔒 Creator - ${latest.results.creater}

🖇️ _Link_ - ${q}

*ᴋɪɴɢ-ᴠᴀᴊɪʀᴀ-ᴍᴅ*
*ᴀʟʟ ʀɪɢʜᴛ ʀᴇꜱᴇʀᴠᴇᴅ - ʙʏ ᴠᴀᴊɪʀᴀ*`
 await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
   await Void.sendMessage(from, { document : { url : latest.results.dl_link  }  ,caption: latest.results.title ,mimetype: 'application/zip', fileName: `${latest.results.title}.zip` }, { quoted: citel })
} catch (e) {
reply('🚫 *Error Accurated !!*');
}
return fs.unlinkSync(`./${randomName}`);     
})
