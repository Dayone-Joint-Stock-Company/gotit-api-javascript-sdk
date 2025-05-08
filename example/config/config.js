module.exports = {
    PORT: 5003,
    API_BASE_PATH: 'https://api-biz-stg.gotit.vn',
    // Contact with GotIt to get key
    X_GI_AUTHORIZATION: '',
    // PrivateKey RSA 2048 auto generate by client and send public_key to GotIt config 
    PRIVATE_KEY_STR: '',
    //  Example private key
    //  PRIVATE_KEY_STR='-----BEGIN RSA PRIVATE KEY-----
    //  Data private key
    //  -----END RSA PRIVATE KEY-----'
    DEFAULT_PAGE_SIZE: 200,
    DEFAULT_STORE_PAGE_SIZE: 50,
    DEFAULT_MIN_PRICE: 1000,
    DEFAULT_MAX_PRICE: 10000000
}; 