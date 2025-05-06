const crypto = require('crypto');

const generateRandomString = (length = 10) => {
    return crypto.randomBytes(length).toString("hex").slice(0, length);
};

const generateSignature = (message, privateKey) => {
    const sign = crypto.createSign("SHA256");
    sign.update(message);
    sign.end();
    return sign.sign(privateKey, "base64");
};

const handleApiResponse = (res) => (error, data, response) => {
    if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
    return res.json(data);
};

module.exports = {
    generateRandomString,
    generateSignature,
    handleApiResponse
}; 