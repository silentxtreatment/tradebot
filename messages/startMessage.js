const { Markup } = require('telegraf')

async function start_message(ctx, menu_keyboard) {
    ctx.replyWithPhoto({ source: './assets/img/start.png' }, { caption: "start message" });
    return await ctx.reply(
        "buttons keyboard",
        Markup.keyboard(menu_keyboard)
            // .oneTime()
            // .resize(),
    );
}

module.exports = start_message;