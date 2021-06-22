let birthday = 20;

const getBirthday= () => {
    if (birthday === undefined) {
        console.log('Дата рождения не задана');
        return false;
    } else {
        console.log(birthday);
        return true;
    }
}

const setBirthday = (userBirthday) => {
    userBirthday = birthday;
    return true;
}

module.exports = {
    getBirthdayUser: getBirthday,
    setBirthdayUser: setBirthday
}