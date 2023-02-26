const User = require('../models/User');

async function user_register(id) {
    const exist_user = await User.findOne({ id })
    if (exist_user) return;

    await User.create({
        "userid": id,
        "date": Date.now()
    });
}

module.exports = { user_register }