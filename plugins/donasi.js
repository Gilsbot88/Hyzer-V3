let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Dana*_✅ : 
║│- 6283136890848
║│
║│➸ _*Pulsa*_✅: 
║│- 6283136890848
║│
║│➸ _*OWNER*_
║│- wa.me/6283136890848
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
