const express = require('express');
const router = express.Router();
const { handleApiResponse } = require('../utils/helpers');
const config = require('../config/config');

const brandApi = new (require('gotit-api-javascript-sdk').BrandsApi)();

// Get list of brands
router.get('/', (req, res) => {
    brandApi.getListOfBrands(config.X_GI_AUTHORIZATION, handleApiResponse(res));
});

// Get list of brands by product
router.get('/brand_product', (req, res) => {
    brandApi.brandsByProducts(config.X_GI_AUTHORIZATION, handleApiResponse(res));
});

// Get brand detail
router.get('/:brandId', (req, res) => {
    const { brandId } = req.params;
    brandApi.getDetailOfBrand(config.X_GI_AUTHORIZATION, brandId, handleApiResponse(res));
});

module.exports = router; 