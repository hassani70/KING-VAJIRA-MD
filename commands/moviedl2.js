const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "movie2",           
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
                    url: anu.thumbnail,
                },

                  status: true,
  code_creator: { name: 'Thisal Sanujaya', github: '@sanuwaofficial' },
  result: {
    title: 'Money Heist (2017 – 2021) Sinhala Subtitles | සිංහල උපසිරසි සමඟ',
    categories: [ 'Crime', 'Drama', 'Spanish'],
    info: {
      Original_title: "La Casa de Papel",
      TMDb_Rating: " 8.3 16,046 votes ",
      First_air_date: "May. 02, 2017",
      Last_air_date: "Dec. 03, 2021",
      Seasons: "3",
      Episodes: "41",
      Average_Duration: "70 minutes "
    },
    cast: [
           { name: 'Álvaro Morte', link: 'https://sinhalasub.lk/cast/alvaro-morte/' },
           { name: 'Úrsula Corberó', link: 'https://sinhalasub.lk/cast/ursula-corbero/' },
           8 more...
          ],
    links: [ 
            [
             { episode: '1 - 1',
               link: 'https://sinhalasub.lk/episodes/money-heist-s1e1/'},
             {
              episode: '1 - 2',
              link: 'https://sinhalasub.lk/episodes/money-heist-s1e2/' },
             11 more...
           ], 
           [
             { episode: '2 - 1',
               link: 'https://sinhalasub.lk/episodes/money-heist-s2e1/'},
             { episode: '2 - 2',
               link: 'https://sinhalasub.lk/episodes/money-heist-s2e2/' },
             7 more...
           ],
            3 more... 
          ]
  }
}

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
