//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
autoread = true //jangan di ubah
global.footer = 'The System Complimentary Inc.'//ganti
global.pulsa = "6285966393571"//ganti
global.gopay = "null"//ganti
global.dana = "6285966393571"//ganti
global.paypal = "null" // biarin aja kalau gaada
global.shopay = "null" // biarin aja kalau gaada
global.saweria = "null" // biarin aja kalau gaada
global.sociabus = "null" // biarin aja kalau gaada
global.bni = "null" // biarin aja kalau gaada
global.bri = "null" // biarin aja kalau gaada
global.bankjatim = "null" // biarin aja kalau gaada
global.jago = "null" // biarin aja kalau gaada
global.neobank = "null" // biarin aja kalau gaada
global.packname = 'Tsci Inc.'//ganti
global.footer = '©SayHi'//ganti
global.ovo = "6285966393571"//ganti
global.ownerlen = "Revky/Inc."//Ubah
global.owner = ['6285966393571'] //ubh nomor owner hp
global.ownername = "Tsci Inc." //ubah
global.ytname = "YT: Revky"//ubah
global.socialm = "IG: null"//ubah
global.location = "Indonesia, Jawatimur, Lumajang"//ubah
global.ownernomer = "6285966393571"//ubah nomorhp owner
global.premium = ['6285966393571']//ubah nomor hp premium
global.nomorcs = '6285966393571'
global.botname = 'Tsci Inc.' //ubah
global.linkz = "null"//ubah
global.websitex = "https://youtube.com/@revky487"//ubah
global.botscript = '-'
global.themeemoji = "♎"//ubah
global.packname = "Sticker By"//ubah
global.author = "Tsci Inc."//ubah
global.wm = "Tsci Inc."//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Rasanya Enak', //ubah...
    admin: 'Cuma Admin.',
    botAdmin: 'Bot Bukan Admin.',
    premime: 'Premium Fitur.',
    owner: 'Cuma Owner', 
    group: 'Cuma Bisa Di Group',
    private: 'Chat Pribadi. Kenalan Sekalian',
    bot: 'Bot Access...',
    wait: 'Sabar OneeChan',
    linkm: 'Mana LinkNya?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")

//SETTING AJA SUKA SUKA ASAL PERHATIIN TANDA PETIK MAUPUN KURUNG
//Jagan lupa menunya di tambhin ya Soalnya saya capek wkkw
global.allmenu = `
•―――― ⌜ CONTOH 1⌟ ――――•
bla bla
bla bla
•―――― ⌜ CONTOH 1⌟ ――――•
bla bla
bla bla
•―――― ⌜ CONTOH 1⌟ ――――•

//dan text yang di awali // jangan di hapus sebagai penanda saja
//ada petik di bawah text ini jangan di hapus kalau mau nambah list langsung tambah aja jangan hapus text ini dan petik di bawa ini
`


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
