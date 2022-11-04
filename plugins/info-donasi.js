let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa : 6281332995497
⫹⫺ Via Dana : 6281332995497
⫹⫺ Via Saweria :
⫹⫺ https://saweria.co/Rimuru233

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
