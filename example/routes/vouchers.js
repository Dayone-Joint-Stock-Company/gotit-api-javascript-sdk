const express = require('express');
const router = express.Router();
const { handleApiResponse, generateRandomString, generateSignature } = require('../utils/helpers');
const config = require('../config/config');

const voucherApi = new (require('gotit-api-javascript-sdk').VoucherApi)();
const voucherSendMethodApi = new (require('gotit-api-javascript-sdk').VoucherSendMethodApi)();
const voucherStatusApi = new (require('gotit-api-javascript-sdk').VoucherStatusApi)();

// Middleware to validate private key
const validatePrivateKey = (req, res, next) => {
    if (!config.PRIVATE_KEY_STR) {
        return res.status(400).json({ error: 'Private key is empty. Please set the PRIVATE_KEY_STR config variable.' });
    }
    next();
};

// Create voucher link e
router.get('/e', validatePrivateKey, (req, res) => {
    try {
        // Get parameters from query with defaults
        const productId = parseInt(req.query.productId) || 1541;
        const amount = parseInt(req.query.amount) || 100000;
        const expiryDate = req.query.expiryDate || '2025-12-30';
        const useOtp = parseInt(req.query.useOtp) || 0;

        // Validate parameters
        if (isNaN(productId) || productId <= 0) {
            return res.status(400).json({ error: 'Invalid productId' });
        }
        if (isNaN(amount) || amount <= 0) {
            return res.status(400).json({ error: 'Invalid amount' });
        }
        if (isNaN(useOtp) || (useOtp !== 0 && useOtp !== 1)) {
            return res.status(400).json({ error: 'Invalid useOtp value. Must be 0 or 1' });
        }

        const transactionRef = generateRandomString(10);
        const data = config.X_GI_AUTHORIZATION + '|' + transactionRef;
        const signature = generateSignature(data, config.PRIVATE_KEY_STR);
        
        const requestCreateVoucherLinkE = {
            transactionRefId: transactionRef,
            productId: productId,
            orderName: generateRandomString(10),
            amount: amount,
            signature: signature,
            expiryDate: expiryDate,
            use_otp: useOtp
        };
        
        const opts = {
            'REQUESTCREATEVOUCHERLINKE': requestCreateVoucherLinkE
        };
        
        voucherApi.createVoucherLinkE(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
    } catch (error) {
        console.error('Error creating voucher link E:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create voucher link v
router.get('/v', (req, res) => {
    const transactionRef = generateRandomString(10);
    
    const requestCreateVoucherLinkV = {
        transactionRefId: transactionRef,
        orderName: generateRandomString(10),
        productId: 1541,
        productPriceId: 2991,
        expiryDate: '2025-12-30',
        use_otp: 0,
        quantity: 1
    };
    
    const opts = {
        'REQUESTCREATEVOUCHERLINKV': requestCreateVoucherLinkV
    };
    
    voucherApi.createVoucherLinkV(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Create voucher link g
router.get('/g', (req, res) => {
    const productList = [
        {
            productId: 1541,
            productPriceId: 2991,
            quantity: 1
        },
        {
            productId: 1541,
            productPriceId: 2992,
            quantity: 1
        }
    ];
    
    const transactionRef = generateRandomString(10);
    
    const requestCreateVoucherLinkG = {
        transactionRefId: transactionRef,
        productList: productList,
        expiryDate: '2025-12-30',
        use_otp: 0,
        orderName: generateRandomString(10)
    };
    
    const opts = {
        'REQUESTCREATEVOUCHERLINKG': requestCreateVoucherLinkG
    };
    
    voucherApi.createVoucherLinkG(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Send voucher by sms
router.get('/send_email', (req, res) => {
    const requestSendVoucherBySMS = new (require('gotit-api-javascript-sdk').RequestSendVoucherBySMS)();
    requestSendVoucherBySMS.voucherLinkCode = "gLsZaFRN";
    requestSendVoucherBySMS.phoneNo = '0394162063';
    requestSendVoucherBySMS.receiverNm = 'Gotit';
    requestSendVoucherBySMS.senderNm = 'Gotit';
    
    const opts = {
        'REQUESTSENDVOUCHERBYSMS': requestSendVoucherBySMS
    };
    
    voucherSendMethodApi.sendVoucherBySMS(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Send voucher by email
router.get('/sendEmail', (req, res) => {
    const requestSendVoucherByEmail = new (require('gotit-api-javascript-sdk').RequestSendVoucherByEmail)();
    requestSendVoucherByEmail.voucherLinkCode = "gLsZaFRN";
    requestSendVoucherByEmail.email = 'quang.huynh@gotit.vn';
    requestSendVoucherByEmail.receiverNm = 'Gotit';
    requestSendVoucherByEmail.senderNm = 'Gotit';
    requestSendVoucherByEmail.message = "Chúc mừng bạn";
    
    const opts = {
        'REQUESTSENDVOUCHERBYEMAIL': requestSendVoucherByEmail
    };
    
    voucherSendMethodApi.sendVoucherByEmail(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Send voucher by zns
router.get('/send_zns', (req, res) => {
    const requestSendVoucherByZns = new (require('gotit-api-javascript-sdk').RequestSendVoucherByZns)();
    requestSendVoucherByZns.phoneNo = '0394162063';
    requestSendVoucherByZns.voucherLinkCode = "gLsZaFRN";
    requestSendVoucherByZns.voucherSerials = ['E2V2RML6F52'];
    requestSendVoucherByZns.transactionId = generateRandomString(15);
    
    const opts = {
        'REQUESTSENDVOUCHERBYZNS': requestSendVoucherByZns
    };
    
    voucherSendMethodApi.sendVoucherByZNS(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Check voucher zns
router.get('/check_zns', (req, res) => {
    const requestCheckStatusZns = new (require('gotit-api-javascript-sdk').RequestCheckStatusZns)();
    requestCheckStatusZns.transactionId = "aNGqaAljTaLc5B3";
    
    const opts = {
        'REQUESTCHECKSTATUSZNS': requestCheckStatusZns
    };
    
    voucherSendMethodApi.checkStatusZNS(config.X_GI_AUTHORIZATION, opts, handleApiResponse(res));
});

// Check voucher status
router.get('/check_status_voucher', (req, res) => {
    const refId = "1111_1aa11";
    const opts = {
        'isExcludeStoreListInfo': false,
        'storeListPage': 1,
        'storeListPageSize': config.DEFAULT_STORE_PAGE_SIZE
    };
    
    voucherStatusApi.checkVoucher(config.X_GI_AUTHORIZATION, refId, opts, handleApiResponse(res));
});

module.exports = router; 