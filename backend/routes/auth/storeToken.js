/*
    Store Token in a HTTPOnly Cookie
*/
const storeToken = (res, token) =>
{
    let expiryDate = new Date();

    expiryDate.setSeconds(expiryDate.getSeconds() + parseInt(process.env.EXPIRATION));

    return res.cookie('user_jwt', token,
        {
            expires: expiryDate,
            secure: false,
            //sameSite: 'none',
            httpOnly: true,
    });
};

module.exports = storeToken;