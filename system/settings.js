let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Waktu
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`

// Hari Tanggal
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Owner
global.owner = [
  ['628990230055', 'Greg.', 'gregslebew@gmail.com', true]
] // Put your number here
global.mods = ['628990230055'] // Moderator
global.prems = ['628990230055'] // Premium
global.rose = '51e0d1fb74102f74edd18be8';
global.xyro = 'wiWISTatY8';
global.btc = 'p8ADYJib';
global.xzn = 'mufar';
global.lolkey = 'GataDios';
global.yanz = 'FizzBotz';
global.zein = 'LuOlangNgentot',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'LuOlangNgentot',
    'https://api.xteam.xyz': 'd90a9e986e18778b',
    'https://api.xyroinee.xyz': 'wiWISTatY8',
    'https://api.neoxr.eu': '5VC9rvNx',
    'https://api.xfarr.com': '-',
    'https://api.zahwazein.xyz': 'LuOlangNgentot',
    'https://api.betabotz.org': 'p8ADYJib',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': '51e0d1fb74102f74edd18be8',
    'https://skizo.tech': 'Mufar',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
  var sticker_author = 'ᴀsᴇᴘ Oғғɪᴄɪᴀʟ'
} else {
  var sticker_name = '𝚂𝚊𝚗𝚣 ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ'
  var sticker_author = 'ᴀsᴇᴘ Oғғɪᴄɪᴀʟ'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'salsa'
global.gcbot = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/'
global.namebot = '© GREG BoT v5'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.myfile = fs.readFileSync(`./media/xfile.pdf`)
global.thumb2 = fs.readFileSync('./media/thumbnail.mp4')
global.qris = 'https://telegra.ph/file/ff11f27dba44672b03b85.png'
global.email = 'greggbbot@gmail.com'
global.creator = "628990230055@s.whatsapp.net"
global.nomorbot = '6289685375169'
global.nomorown = '628990230055'
global.pairingNumber = '6289685375169'

// Harga Nokos
global.nokosindo = '7000'
global.nokosusa = '8000'
global.nokosmalay = '12000'

// Panel
global.domain = 'https://panelatakclay.ridhoclay.com/auth/login' // Domain Web
global.apikey = 'ptla_tyJ14TlRXqq8jvrKqMus8kmVszz72UJqDHOLAmBbMoh' // Key PTLA
global.c_apikey = 'ptlc_kGsuzIYEgRs88oTwGjM1jpCEwQP0ungm5rzDAAVdFiR' // Key PTLC
global.eggs = '15'
global.locs = '1'

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = '-'
global.swa = 'https://wa.me/628990230055'
global.swb = '-' // Link Discord
global.snh = '-' // Link nhentai

// Pembayaran
global.pdana = '~Priv~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Priv'
global.pulsa2 = '~priv~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = '𝔾ℝ𝔼𝔾 𝔹𝕠𝕋 𝕧𝟝'
global.author = '// Greg Yow'
global.wm = '𝔾ℝ𝔼𝔾 𝔹𝕠𝕋 𝕧𝟝'
global.wm2 = '𝔾ℝ𝔼𝔾 𝔹𝕠𝕋 𝕧𝟝'
global.bottime = `Time: ${wktuwib}`
global.botdate = `Date: ${week} ${date}\nTime: ${wktuwib}`
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Success...\nDont forget to donate```'
global.packname = '𝔾ℝ𝔼𝔾 𝔹𝕠𝕋 𝕧𝟝'
global.author = 'Greg Mwhehe'
global.nameown = 'Greg Mwhehe'
global.wait = 'Loading Cuk... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//