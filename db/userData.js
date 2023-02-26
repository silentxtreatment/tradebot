const User = require('../models/User')

async function user_data(id) {
    const data = await User.find({ id });
    return data;
}

module.exports = user_data