const express = require('express');
const router = express.Router();
const { handleApiResponse } = require('../utils/helpers');
const config = require('../config/config');

const productApi = new (require('gotit-api-javascript-sdk').ProductsApi)();

// Get list of products
router.get('/', (req, res) => {
    const page = 1;
    const pageSize = config.DEFAULT_PAGE_SIZE;
    const opts = {
        'minPrice': config.DEFAULT_MIN_PRICE,
        'maxPrice': config.DEFAULT_MAX_PRICE,
        'isExcludeStoreListInfo': true,
        'storeListPage': 1,
        'storeListPageSize': config.DEFAULT_STORE_PAGE_SIZE
    };

    productApi.getListOfProducts(
        config.X_GI_AUTHORIZATION,
        page,
        pageSize,
        opts,
        handleApiResponse(res)
    );
});

// Get product detail
router.get('/:productId', (req, res) => {
    const { productId } = req.params;
    const opts = {
        'isExcludeStoreListInfo': true,
        'storeListPage': 1,
        'storeListPageSize': config.DEFAULT_STORE_PAGE_SIZE
    };

    productApi.getProductDetail(
        config.X_GI_AUTHORIZATION,
        productId,
        opts,
        handleApiResponse(res)
    );
});

// Get store of products
router.get('/:productId/stores', (req, res) => {
    const { productId } = req.params;
    productApi.getStoresOfProduct(
        config.X_GI_AUTHORIZATION,
        productId,
        handleApiResponse(res)
    );
});

module.exports = router; 