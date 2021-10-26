let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [089638023602]
│ • Telkomsel [081291282733]
╰────

╭─「 Donasi 」
│ • wa.me/6289638023602
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
