const config = require("../config");
const {
  cmd,
  commands
} = require('../command');
const {
  runtime
} = require("../lib/functions");
cmd({
  'pattern': "menu",
  'react': '📃',
  'alias': ["panel", "commands"],
  'desc': "menu the bot",
  'category': 'main'
}, async (_0x22bf17, _0x5f31fc, _0x273407, {
  from: _0x32ec9e,
  quoted: _0x38a3de,
  body: _0xbffb33,
  isCmd: _0x3b900b,
  command: _0x39893d,
  args: _0x514f05,
  q: _0x838950,
  isGroup: _0x1e52d8,
  sender: _0x89f99e,
  senderNumber: _0x442d40,
  botNumber2: _0x3d0d13,
  botNumber: _0x4263a9,
  pushname: _0x3a7ecc,
  isMe: _0x581056,
  isOwner: _0xafb871,
  groupMetadata: _0x1ee01f,
  groupName: _0x2cbf47,
  participants: _0x3500d2,
  groupAdmins: _0x2c985c,
  isBotAdmins: _0x4d1d5c,
  isAdmins: _0x56b3d1,
  reply: _0x3480dc
}) => {
  try {
    let _0x2c3bd5 = "*𝐖𝐄𝐋𝐂𝐎𝐌𝐄*\n\n     *" + _0x3a7ecc + "*\n     *\n*" + config.BOT_NAME + "*\n*> *ʀᴜɴᴛɪᴍᴇ : " + runtime(process.uptime()) + "*\n> *ʀᴀᴍ ᴜꜱᴀɢᴇ : " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB*\n> *ᴍᴏᴅᴇ : *" + config.MODE + "*\n> *ᴘʀᴇғɪx : *" + config.PREFIX + "*\n*`*𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔*`*\n*\n*1 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 💻*\n*2 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 📥*\n*3 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 👥*\n*4 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 📃*\n*4 𝐑𝐀𝐍𝐃𝐎𝐌 𝐌𝐄𝐍𝐔 🧚‍♂️*\n*5 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 🔄*\n*6 𝐀𝐈 𝐌𝐄𝐍𝐔 🤖*\n*7 𝐖𝐀𝐋𝐋𝐏𝐀𝐏𝐄𝐑 𝐌𝐄𝐍𝐔 🌠*\n*8 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔 ⚙️*\n\n*❏ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴏᴜᴛ ᴛᴏ sᴇʟᴇᴄ *\n\n> " + config.CAPTION;
    const _0x15c492 = await _0x22bf17.sendMessage(_0x32ec9e, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x2c3bd5,
      'contextInfo': {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '120363352224008317@newsletter',
          'newsletterName': "SOBIAMD",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "SOBIA-MD",
          'body': '' + _0x3a7ecc,
          'mediaType': 0x1,
          'sourceUrl': 'https://whatsapp.com/channel/0029VaHO5B0G3R3cWkZN970s',
          'thumbnailUrl': "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x5f31fc
    });
    _0x22bf17.ev.on("messages.upsert", async _0x1cf8c2 => {
      const _0x2ec73c = _0x1cf8c2.messages[0x0];
      if (!_0x2ec73c.message || !_0x2ec73c.message.extendedTextMessage) {
        return;
      }
      const _0x256428 = _0x2ec73c.message.extendedTextMessage.text.trim();
      if (_0x2ec73c.message.extendedTextMessage.contextInfo && _0x2ec73c.message.extendedTextMessage.contextInfo.stanzaId === _0x15c492.key.id) {
        switch (_0x256428) {
          case '1':
            let _0x7b52a2 = "\n*[ • 👨‍💻 OWNER-CMD 👨‍💻 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*\n*┋* *.sᴇᴛᴛɪɴɢs*\n*┋* *.ᴏᴡɴᴇʀ*\n*┋* *.ʀᴇᴘᴏ*\n*┋* *.ꜱʏꜱᴛᴇᴍ*\n*┋* *.ꜱᴛᴀᴛᴜꜱ*\n*┋* *.ʙʟᴏᴄᴋ*\n*┋* *.ᴜɴʙʟᴏᴄᴋ*\n*┋* *.sʜᴜᴛᴅᴏᴡɴ*\n*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*\n*┋* *.sᴇᴛᴘᴘ*\n*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*\n*┋* *.ᴊɪᴅ*\n*┋* *.ɢᴊɪᴅ*\n*┋* *.ʀᴇꜱᴛᴀʀᴛ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x7b52a2
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '2':
            let _0x2f77c8 = "\n*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*                        \n*╭┈───────────────•*\n*┋* *.ғʙ <ᴜʀʟ>*\n*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*\n*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*\n*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*\n*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*\n*┋* *.ᴛᴛ<ᴜʀʟ>*\n*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*\n*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*\n*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*\n*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*\n*┋* *.ᴠɪᴅᴇᴏ2 <ᴜʀʟ>*\n*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*\n*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*\n*┋* *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*\n*┋* *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*\n*┋* *.ʙᴀɪsᴄᴏᴘᴇ <ᴜʀʟ>*\n*┋* *.ɢɪɴɪsɪsɪʟᴀ <ᴛɪᴛᴛʟᴇ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x2f77c8
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '3':
            let _0x1a86ce = "\n*[ • 👥 GROUP-CMD 👥 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*\n*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*\n*┋* *.ᴀᴅᴅ*\n*┋* *.ᴋɪᴄᴋ*\n*┋* *.ᴋɪᴄᴋᴀʟʟ*\n*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*\n*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*\n*┋* *.ᴘʀᴏᴍᴏᴛᴇ*\n*┋* *.ᴅᴇᴍᴏᴛᴇ*\n*┋* *.ᴛᴀɢᴀʟʟ*\n*┋* *.ɢᴇᴛᴘɪᴄ*\n*┋* *.ɪɴᴠɪᴛᴇ*\n*┋* *.ʀᴇᴠᴏᴋᴇ*\n*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*\n*┋* *.ᴀʟʟʀᴇǫ*\n*┋* *.ᴍᴜᴛᴇ*\n*┋* *.ᴜɴᴍᴜᴛᴇ*\n*┋* *.ʟᴏᴄᴋɢᴄ*\n*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*\n*┋* *.ʟᴇᴀᴠᴇ*\n*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*\n*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*\n*┋* *.ᴊᴏɪɴ*\n*┋* *.ʜɪᴅᴇᴛᴀɢ*\n*┋* *.ɢɪɴғᴏ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*\n*┋* *.sᴇɴᴅᴅᴍ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x1a86ce
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '4':
            let _0x29cd71 = "\n*[ • 📃 INFO-CMD 📃 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴍᴇɴᴜ*\n*┋* *.ᴍᴇɴᴜ2*\n*┋* *.ᴍᴇɴᴜ3*\n*┋* *.ᴀʙᴏᴜᴛ*\n*┋* *.sᴄʀɪᴘᴛ*\n*┋* *.ʀᴇᴘᴏ*\n*┋* *.ᴀʟɪᴠᴇ*\n*┋* *.ʙᴏᴛɪɴꜰᴏ*\n*┋* *.ꜱᴛᴀᴛᴜꜱ*\n*┋* *.ꜱᴜᴘᴘᴏʀᴛ*\n*┋* *.ᴘɪɴɢ*\n*┋* *.ᴘɪɴɢ2*\n*┋* *.ꜱʏꜱᴛᴇᴍ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x29cd71
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '5':
            let _0x3831e4 = "\n*[ • 🥂 RANDOM-CMD 🥂 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴋɪɴɢ*\n*┋* *.ᴅᴏɢ*\n*┋* *.ᴀɴɪᴍᴇ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x3831e4
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '6':
            let _0x24736d = "\n*[ • 🎡 CONVERTER-CMD 🎡 ‎• ]*\n*╭┈───────────────•*\n*┋* *.sᴛɪᴄᴋᴇʀ*\n*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*\n*┋* *.ᴛᴛs <ᴛᴇxᴛ>*\n*┋* *.ᴀᴛᴛᴘ <ᴛᴇxᴛ>*\n*┋* *.ᴛᴛᴘ <ᴛᴇxᴛ>*\n*┋* *.ᴠᴠ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ᴛᴏᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ɪᴍɢ2ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x24736d
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '7':
            let _0x46894c = "\n*[ • 🧠 AI-CMD 🧠 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*\n*┋* *.ᴀɪ <ᴛᴇxᴛ>*\n*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*\n*┋* *.ʙʟᴀᴄᴋʙᴏx <ᴛᴇxᴛ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x46894c
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '8':
            let _0x10913a = "\n*[ • 🏜️ WALLPAPERS-CMD 🏜️ ‎• ]*\n*╭┈───────────────•*\n*┋* *.ɪᴍɢ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x10913a
            }, {
              'quoted': _0x5f31fc
            });
            break;
          case '9':
            let _0x1cc785 = "\n*[ • 🌐 OTHER-CMD 🌐 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴛʀᴛ*\n*┋* *.ᴊᴏᴋᴇ*\n*┋* *.ꜰᴀᴄᴛ*\n*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*\n*┋* *.ɢᴘᴀꜱꜱ*\n*┋* *.ʜᴀᴄᴋ*\n*┋* *.ǫᴜᴏᴛᴇ*\n*┋* *.ꜱʀᴇᴘᴏ*\n*┋* *.ᴅᴇꜰɪɴᴇ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x22bf17.sendMessage(_0x32ec9e, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x1cc785
            }, {
              'quoted': _0x5f31fc
            });
            break;
          default:
            _0x3480dc("*Please select a valid option🔴*");
        }
      }
    });
  } catch (_0x441cdf) {
    console.error(_0x441cdf);
    await _0x22bf17.sendMessage(_0x32ec9e, {
      'react': {
        'text': '❌',
        'key': _0x5f31fc.key
      }
    });
    _0x3480dc("An error occurred while processing your request.");
  }
});
