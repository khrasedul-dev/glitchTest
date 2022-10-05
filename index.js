const {Telegraf} = require('telegraf')
const express = require('express')
const app = express()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx=>{
    ctx.reply('Bot started')
})

bot.command('test',ctx=>{
    ctx.reply('This is test command')
})

app.use(bot.webhookCallback(`/${process.env.BOT_TOKEN}`))
bot.telegram.setWebhook(`https://glitch-test-rose.vercel.app:8443/${process.env.BOT_TOKEN}`)


const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("The bot app is running")
})