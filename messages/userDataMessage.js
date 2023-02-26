const { Markup } = require('telegraf');
const user_data = require('../db/userData');

async function user_data_message(ctx) {
    const { id } = ctx.update.message.from;
    const response = await user_data(id);
    const user_info = response[0];
    return ctx.replyWithPhoto(
        { source: './assets/img/start.png' },
        {
            caption: `
Мой аккаунт

Баланс: ${user_info.balance} RUB
Ваш пользовательский ID: ${user_info.userid}
Дата регистрации: ${new Date(user_info.date).toLocaleDateString()} ${new Date(user_info.date).toLocaleTimeString()}

Количество моих сделок: ${user_info.orders.length}
Активных сделок: ${user_info.orders.filter(item => item.active).length}

Мой доход с торгов: ${user_info.profit} RUB

------------------------

Текущий объем торгов: ${(2340013 + (2340013 * Math.random() * (20 - 1) + 1) / 100).toFixed(0)} USD
Число сделок онлайн: ${(998 + (998 * Math.random() * (20 - 1) + 1) / 100).toFixed(0)}`,
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                Markup.button.webApp('История сделок', '../history.html')
            ]),
        });
}

module.exports = { user_data_message }