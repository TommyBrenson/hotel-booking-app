function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min) + min)
};

function getRandomString(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let seq = new Array(length).fill(null);
    
    return seq.map(() => chars[getRandomInt(0, chars.length - 1)]).join("")
}

function generateUserData() {
    return {
        avatarPhoto: `https://avatars.dicebear.com/api/avataaars/${getRandomString(12)}.svg`
    }
}