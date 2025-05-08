const express = require('express');
const config = require('./config/config');
const GotitApiSdkJavascript = require('gotit-api-javascript-sdk');

// Initialize SDK
GotitApiSdkJavascript.basePath = config.API_BASE_PATH;

// Initialize Express app
const app = express();

// Import routes
const brandsRouter = require('./routes/brands');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const vouchersRouter = require('./routes/vouchers');

// Use routes
app.use('/brands', brandsRouter);
app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/vouchers', vouchersRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(config.PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${config.PORT}`);
});
