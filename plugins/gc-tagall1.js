

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:* ${pesan}`;
  let teks = `*𝗠𝗘𝗡𝗖𝗜𝗢𝗡𝗔𝗡𝗗𝗢 𝗛𝗘𝗥𝗠𝗢𝗦𝗔𝗦 🌸*\n\n ${oi}\n\n➥ _*@kattiesbot1:*_\n`;
  for (const mem of participants) {
    teks += `💕➤ @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└𝗞𝗮𝘁𝘁𝗶𝗲'𝘀 𝗕𝗼𝘁 ⇝ @𝗞𝗮𝘁𝘁𝗶𝗲𝘀𝗯𝗼𝘁𝟭*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall1|invocar1|invocacion1|todas|invocación1)$/i;
handler.admin = true;
handler.group = true;
export default handler;
