const start_message = require("../messages/startMessage");
const { user_data_message } = require("../messages/userDataMessage");
const { user_register } = require("../db/auth");

const menu_keyboard = [
    ["Обновить данные", "Отменить действие"],
    ["Мой профиль", "Начать торговлю"],
    ["Пополнить", "Вывести", "Live переводы"],
    ["Отзывы", "Настройки"]
];

function start(bot) {
    bot.start(async (ctx) => {
        const { id } = ctx.update.message.from
        await user_register(id)
        await start_message(ctx, menu_keyboard)
    });

    bot.hears(menu_keyboard[0][0], ctx => user_data_message(ctx));
    bot.hears(menu_keyboard[0][1], ctx => user_data_message(ctx));
    bot.hears(menu_keyboard[1][0], ctx => user_data_message(ctx));
}

module.exports = start