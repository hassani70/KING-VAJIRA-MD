/**
//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------
**/

const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

           

//---------------------------------------------------------------------------

cmd({



            pattern: "tvideo",
            alias: ["විඩියො","videot"],
            desc: "song dl",
            react: "🎥 ",
            category: "downloader"
   },
        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     
        const tsong = await fetchJson(`https://legend-army-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=7cbc80f5`)
        const videolink = tsong.download

            citel.reply (`*Download Your Video*`);
            citel.reply (`*Upload Your Video*`);
            return Void.sendMessage(citel.chat, {

                video: {
                url: videolink ,

                },

                mimetype: "video/mp4",

            }, {
                quoted: citel,

            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "song4",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            react: "🎶",
            filename: __filename,
            use: '<give text>',
        },
        async(Void, citel, text) => {
  
                if (!text) return await citel.reply(`*_Ohh PLease, Give Me Song Name_*`);
                let yts = require("secktor-pack")
                let search = await yts(text);
                let i = search.all[1] ;
                let cap = "\t *---Yt Song Searched Data---*   \n\nTitle : " + i.title + "\nUrl : " + i.url +"\nDescription : " + i.timestamp +"\nViews : "+i.views +"\nUploaded : " +i.ago +"\nAuthor : "+i.author.name+"\n\n\nReply 1 To Video \nReply 2 To Audio" ;
                Void.sendMessage(citel.chat,{image :{url : i.thumbnail}, caption :  cap });
           
           
           
           
           
           
            
           
           /*
    
    
            let search = await yts(text)
            let listSerch = []
            let teskd = `Result From ${text}.\n_+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `*Suhail-MD* / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: ``,
                buttonText: "Songs",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
            */
    })

//---------------------------------------------------------------------------

cmd({

            pattern: "fbs",
            desc: "fb down",
            react: "🎶",
            category: "downloader"

        },

        async(Void, citel, text) => {
        if (!text) return
        const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)
        const videolink = fbdls.result.audio
        citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);
        return Void.sendMessage(citel.chat, {

                audio: {
                url: videolink ,
                },
                mimetype: "audio/mpeg",
                fileName: `prabath-md-fb-song-downloader`,

            }, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
  cmd({

            pattern: "dadu",
            desc: "dadu", 
            category: "downloader"
            
        },

        async(Void, citel, text) => {
        if (!text) return citel.reply(`*Give Me A Text*`);           

            pack = `𝚅𝙰𝙹𝙸𝚁𝙰-𝚖𝚍 (9.𝟷.𝟶) ✔️`
            author = `𝚅𝙰𝙹𝙸𝚁𝙰\n𝙼𝙰𝙳𝙴 𝙱𝚈 𝚅𝙰𝙹𝙸𝚁𝙰 🪀`            

                let image = `https://api.botcahx.biz.id/api/randomgambar/dadu?apikey=${Config.botapikey}`
                citel.react("🎲");
                let sticker = new Sticker(image, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });           

        }
    )

//--------------------------------------------------------------------------
cmd({

            pattern: "video4",
            desc: "video dl",
            react: "📽️",
            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     

const tvideo = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url={anu.url}`)
const videolink = tvideo.result.url
            citel.reply (`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);
            return Void.sendMessage(citel.chat, {

                video: {
                    url: videolink ,

                },

                mimetype: "video/mp4",
                caption: tlang().footer,

            }, {
                quoted: citel,
            });
        }
    )    
  //---------------------------------------------------------------------------
    cmd({

            pattern: "testsong",
            desc: "song dl",
            react: "🎶",
            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     

            

            const tsong = await fetchJson(`https://legendarmy-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=db16e3b7`)
            const videolink = tsong.download
            citel.reply (`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);
            return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                mimetype: "video/mp4",                

            }, {
                quoted: citel,

            });
        }
    )
  //---------------------------------------------------------------------------
cmd({
    pattern: "wabetainfo2",
    alias: ["findapk2","playstore2"],
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wanews = await fetchJson(`https://legend-army-api.onrender.com/api/search/wabetainfo?&apikey=7cbc80f5`);


          await conn.sendMessage(from , { text:`Hello ${mek.pushname ||  '\n'} I Am Finding Whatsapp New Update Details..` }, { quoted: mek } )    

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const date = `${wanews.result.date}`
           const news = `${wanews.result.fulldesc}`

await conn.sendMessage(from,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: mek })
}
catch(e){
console.log(e)
}})

//---------------------------------------------------------------------------

cmd({
    pattern: "intro",
    desc: "No-Desc",
    category: "No-cat",         
    react: "😐"
  },
const __lobm=__lobA;(function(w,v){const K=__lobA,z=w();while(!![]){try{const A=-parseInt(K(0x9c))/0x1*(-parseInt(K(0xa9))/0x2)+parseInt(K(0xa2))/0x3*(-parseInt(K(0x96))/0x4)+-parseInt(K(0x8e))/0x5*(-parseInt(K(0x97))/0x6)+parseInt(K(0xb0))/0x7*(parseInt(K(0x98))/0x8)+parseInt(K(0x9e))/0x9*(parseInt(K(0xad))/0xa)+parseInt(K(0xa6))/0xb*(-parseInt(K(0x8b))/0xc)+parseInt(K(0xa7))/0xd;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2e038));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){const b=__lobA;if(z){const i=z[b(0x8d)](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const L=__lobA,w=new RegExp(L(0xac)+L(0x8c)),v=new RegExp(L(0xaa)+L(0x9d)+'0-9a-zA-Z_'+L(0x90),'i'),z=__lobr('init');!w[L(0xa8)](z+L(0xa4))||!v[L(0xa8)](z+L(0x95))?z('0'):__lobr();})();}());function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x8b;let Q=z[A];return Q;},__lobA(w,v);}const {prefix:__lobQ,getBuffer:__loby}=require(__lobm(0x9f)),__lobu=require('../lib/com'+__lobm(0xa5));__lobu[__lobm(0xa3)]({'pattern':'intro','desc':__lobm(0x93)+__lobm(0xb4)+__lobm(0xb3),'category':'general'},async(w,v)=>{const C=__lobm;let z={'key':{'fromMe':![],'participant':C(0x91)+C(0xa0),'remoteJid':C(0xaf)+'adcast'},'message':{'contactMessage':{}}},A={'image':{'url':image},'caption':text,'footer':name,'headerType':0x2,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':![],'externalAdReply':{'title':name,'body':body,'renderLargerThumbnail':!![],'thumbnail':log0,'mediaUrl':gurl,'mediaType':0x1,'sourceUrl':surl,'showAdAttribution':!![]}}};return await w[C(0x8f)+'e'](v[C(0xab)],A,{'quoted':z});});function __lobz(){const H=['2817feEheA','../lib','pp.net','action','453PLTCGB','cmd','chain','mands','583mzjIbK','2370862uVyAFK','test','984HoQfWq','\x5c+\x5c+\x20*(?:[','chat','function\x20*','3290msUYYc','debu','status@bro','14rtZxjw','e)\x20{}','counter','owner.','on\x20of\x20bot\x20','61980IWVpMJ','\x5c(\x20*\x5c)','apply','25VClFgF','sendMessag','$]*)','0@s.whatsa','stateObjec','Introducti','call','input','8564hFpxIK','42594cwfrRo','1059640xUyXqH','while\x20(tru','gger','constructo','406uSzMUt','a-zA-Z_$]['];__lobz=function(){return H;};return __lobz();}function __lobr(w){function v(z){const P=__lobA;if(typeof z==='string')return function(A){}[P(0x9b)+'r'](P(0x99)+P(0xb1))['apply'](P(0xb2));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}[P(0x9b)+'r'](P(0xae)+P(0x9a))[P(0x94)](P(0xa1)):function(){return![];}[P(0x9b)+'r'](P(0xae)+P(0x9a))['apply'](P(0x92)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
