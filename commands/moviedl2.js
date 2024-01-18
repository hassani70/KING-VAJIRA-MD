const moment = require('moment-timezone')
const {fetchJson,cmd, tlang } = require('../lib')
let gis = require("async-g-i-s");
const axios = require('axios')
const fetch = require('node-fetch')

    //---------------------------------------------------------------------------
cmd({
            pattern: "movie2",
            category: "search",
            react: "🎬",
            desc: "Sends image of asked Movie/Series.",
            use: '<text>',
            filename: __filename,
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`_Name a Series or movie ${tlang().greet}._`);
           await Void.sendMessage(
                citel.chat, 
{
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
            Void.sendMessage(citel.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: citel,
            });

        }
    )
