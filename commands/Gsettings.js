const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "groupsetting",           
            desc: "(menu cmdlist).",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/b10172f9cfdbe5f43c43e.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓


title: MUTE GROUP 🔇

rowId: ${prefix}group close

description: ' '



title: UNMUTE GROUP 🔊

rowId: ${prefix}group open

description: ' '



title: ACTIVE ANTILINK ✅

rowId: ${prefix}act antilink

description: ' '



title: DEACTIVE ANTILINK ❌

rowId: ${prefix}deact antilink

description: ' '



title: ACTIVE BOT THIS GROUP ✅

rowId: ${prefix}bot on

description: ''



title: DEACTIVE BOT THIS GROUP ❌

rowId: ${prefix}bot off

description: ''



title: ACTIVE ADD MESSAGE AND LEFT MESSAGE ✅

rowId: ${prefix}act events

description: ''



title: DEACTIVE ADD MESSAGE AND LEFT MESSAGE ❌

rowId: ${prefix}deact events

description: ''



┏━━━━━━━━━━━━━━━━━━━━━━━━━
┃   *GROUP SETTINGS CHANGE*
┗━━━━━━━━━━━━━━━━━━━━━━━━━


*THINGS THAT CAN BE CHANGED FROM THIS,*

● MUTE GROUP
● UNMUTE GROUP

● ACTIVE ANTILINK
● DEACTIVE ANTILINK

● ACTIVE BOT THIS GROUP
● DEACTIVE BOT THIS GROUP

● ACTIVE ADD MESSAGE AND LEFT MESSAGE
● DEACTIVE ADD MESSAGE AND LEFT MESSAGE 


*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*▶ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ ◀*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
