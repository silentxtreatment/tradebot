const { Telegraf } = require('telegraf');
const connectDB = require('./db/start');
const listeners = require('./listeners');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);

connectDB();

listeners(bot);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
