const birhtdayUser = require('./getBirthday.js');
const timer10min = require('./taimer.js');

module.exports = {
    getBirthdayUser: birhtdayUser.getBirthdayUser,
    setBirthdayUser: birhtdayUser.setBirthdayUser,
}