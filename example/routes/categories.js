const express = require('express');
const router = express.Router();
const { handleApiResponse } = require('../utils/helpers');
const config = require('../config/config');

const categoryApi = new (require('gotit-api-javascript-sdk').CategoriesApi)();

// Get list categories
router.get('/', (req, res) => {
    categoryApi.getListOfCategories(config.X_GI_AUTHORIZATION, handleApiResponse(res));
});

// Get list categories by product
router.get('/category_product', (req, res) => {
    categoryApi.getCategoryByProduct(config.X_GI_AUTHORIZATION, handleApiResponse(res));
});

module.exports = router; 