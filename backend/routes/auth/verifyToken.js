const jwt = require('jsonwebtoken');

/*
    PREPARE Response status, body and Content-Type Header
    SEND Response
*/
const prepareResponse = (response, status, body, type) =>
{
    response.set('Content-Type', type);
    return response.status(status).send(body);
};

/*
    Verify Token Existance in a HTTPOnly Cookie
*/
const verifyToken = async (req, res, next) =>
{
    const token = req.cookies.user_jwt || '';

    try
    {
        if (!token)
        {
            const response = {
                success: false,
                message: "No Token was found to proceed with your request, please sign in if necessary."
            };

            return prepareResponse(res, 401, response, 'application/json');
        }

        const decrypt = await jwt.verify(token, process.env.SECRET);

        next();
    }
    catch (error)
    {
        const response = {
            success: false,
            message: "Some internal server error has occured while attempting to proceed " +
                "with your request, please try again."
        };

        return prepareResponse(res, 500, error.toString(), 'application/json');
    }
};

module.exports = verifyToken;