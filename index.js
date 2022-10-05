const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx=>{
    ctx.reply('Bot started')
})

bot.command('test',ctx=>{
    ctx.reply('This is test command')
})

bot.telegram.setWebhook(`${process.env.BOT_DOMAIN}:8443/${process.env.BOT_TOKEN}`)
bot.startWebhook(`/${process.env.BOT_TOKEN}`,null,8443)

bot.launch()
.then(()=>console.log("Bot started"))
.catch((e)=>console.log(e))
