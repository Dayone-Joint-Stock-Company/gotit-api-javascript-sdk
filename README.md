# API client gotit-api-javascript-sdk

SDK Technical document for GotIt APIs

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install gotit-api-javascript-sdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your gotit-api-javascript-sdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install https://github.com/Dayone-Joint-Stock-Company/gotit-api-javascript-sdk.git --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var GotitApiJavascriptSdk = require('gotit-api-javascript-sdk');


var api = new GotitApiJavascriptSdk.BrandsApi()
var xGIAuthorization = "API key GotIt provided"; // {String} Authorization
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.brandsByProducts(xGIAuthorization, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api-biz-stg.gotit.vn*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*GotitApiJavascriptSdk.BrandsApi* | [**brandsByProducts**](docs/BrandsApi.md#brandsByProducts) | **GET** /api/v4.0/brands/brandsByProducts | Get brand by product
*GotitApiJavascriptSdk.BrandsApi* | [**getDetailOfBrand**](docs/BrandsApi.md#getDetailOfBrand) | **GET** /api/v4.0/brands/{id} | Get brand detail
*GotitApiJavascriptSdk.BrandsApi* | [**getListOfBrands**](docs/BrandsApi.md#getListOfBrands) | **GET** /api/v4.0/brands | Get list of brands
*GotitApiJavascriptSdk.CategoriesApi* | [**getCategoryByProduct**](docs/CategoriesApi.md#getCategoryByProduct) | **GET** /api/v4.0/categories/categoriesByProducts | Get category by product
*GotitApiJavascriptSdk.CategoriesApi* | [**getListOfCategories**](docs/CategoriesApi.md#getListOfCategories) | **GET** /api/v4.0/categories | Get lists category
*GotitApiJavascriptSdk.ProductsApi* | [**getListOfProducts**](docs/ProductsApi.md#getListOfProducts) | **GET** /api/v4.0/products | Get all products master data
*GotitApiJavascriptSdk.ProductsApi* | [**getProductDetail**](docs/ProductsApi.md#getProductDetail) | **GET** /api/v4.0/products/{id} | Get product detail data
*GotitApiJavascriptSdk.ProductsApi* | [**getStoresOfProduct**](docs/ProductsApi.md#getStoresOfProduct) | **GET** /api/v4.0/products/{id}/stores | Get stores of this product
*GotitApiJavascriptSdk.VoucherApi* | [**createVoucherLinkE**](docs/VoucherApi.md#createVoucherLinkE) | **POST** /api/v4.0/vouchers/e | Create voucher link e
*GotitApiJavascriptSdk.VoucherApi* | [**createVoucherLinkG**](docs/VoucherApi.md#createVoucherLinkG) | **POST** /api/v4.0/vouchers/g | Create voucher link g
*GotitApiJavascriptSdk.VoucherApi* | [**createVoucherLinkV**](docs/VoucherApi.md#createVoucherLinkV) | **POST** /api/v4.0/vouchers/v | Create voucher link v
*GotitApiJavascriptSdk.VoucherSendMethodApi* | [**checkStatusZNS**](docs/VoucherSendMethodApi.md#checkStatusZNS) | **POST** /api/v4.0/vouchers/send/zns/check | Check status zns
*GotitApiJavascriptSdk.VoucherSendMethodApi* | [**sendVoucherByEmail**](docs/VoucherSendMethodApi.md#sendVoucherByEmail) | **POST** /api/v4.0/vouchers/send/email | Send voucher by mail
*GotitApiJavascriptSdk.VoucherSendMethodApi* | [**sendVoucherBySMS**](docs/VoucherSendMethodApi.md#sendVoucherBySMS) | **POST** /api/v4.0/vouchers/send/sms | Send voucher by sms
*GotitApiJavascriptSdk.VoucherSendMethodApi* | [**sendVoucherByZNS**](docs/VoucherSendMethodApi.md#sendVoucherByZNS) | **POST** /api/v4.0/vouchers/send/zns | Send voucher by zns
*GotitApiJavascriptSdk.VoucherStatusApi* | [**checkVoucher**](docs/VoucherStatusApi.md#checkVoucher) | **GET** /api/v4.0/vouchers/multiple/status/{refId} | Check voucher status


## Documentation for Models

 - [GotitApiJavascriptSdk.BRANDCATEGORYDETAIL](docs/BRANDCATEGORYDETAIL.md)
 - [GotitApiJavascriptSdk.BRANDCATEGORYDETAILRESPONSE](docs/BRANDCATEGORYDETAILRESPONSE.md)
 - [GotitApiJavascriptSdk.BRANDDETAIL](docs/BRANDDETAIL.md)
 - [GotitApiJavascriptSdk.BRANDDETAILRESPONSE](docs/BRANDDETAILRESPONSE.md)
 - [GotitApiJavascriptSdk.BRANDREEDEMSCHEMA](docs/BRANDREEDEMSCHEMA.md)
 - [GotitApiJavascriptSdk.BRANDSDETAIL](docs/BRANDSDETAIL.md)
 - [GotitApiJavascriptSdk.BRANDSRESPONSE](docs/BRANDSRESPONSE.md)
 - [GotitApiJavascriptSdk.CATEGORIESDETAIL](docs/CATEGORIESDETAIL.md)
 - [GotitApiJavascriptSdk.CATEGORIESRESPONSE](docs/CATEGORIESRESPONSE.md)
 - [GotitApiJavascriptSdk.GROUPVOUCHERSCHEMA](docs/GROUPVOUCHERSCHEMA.md)
 - [GotitApiJavascriptSdk.HTTPBADREQUEST](docs/HTTPBADREQUEST.md)
 - [GotitApiJavascriptSdk.HTTPINTERNALSERVERERROR](docs/HTTPINTERNALSERVERERROR.md)
 - [GotitApiJavascriptSdk.HTTPNOTFOUND](docs/HTTPNOTFOUND.md)
 - [GotitApiJavascriptSdk.HTTPUNAUTHORIZED](docs/HTTPUNAUTHORIZED.md)
 - [GotitApiJavascriptSdk.PAGINGSCHEMA](docs/PAGINGSCHEMA.md)
 - [GotitApiJavascriptSdk.PRODUCTDEFAULTLINKG](docs/PRODUCTDEFAULTLINKG.md)
 - [GotitApiJavascriptSdk.PRODUCTDETAIL](docs/PRODUCTDETAIL.md)
 - [GotitApiJavascriptSdk.PRODUCTDETAILRESPONSE](docs/PRODUCTDETAILRESPONSE.md)
 - [GotitApiJavascriptSdk.PRODUCTG](docs/PRODUCTG.md)
 - [GotitApiJavascriptSdk.PRODUCTPRICESCHEMA](docs/PRODUCTPRICESCHEMA.md)
 - [GotitApiJavascriptSdk.PRODUCTSALLDETAIL](docs/PRODUCTSALLDETAIL.md)
 - [GotitApiJavascriptSdk.PRODUCTSDEFAULTLINKG](docs/PRODUCTSDEFAULTLINKG.md)
 - [GotitApiJavascriptSdk.PRODUCTSDETAIL](docs/PRODUCTSDETAIL.md)
 - [GotitApiJavascriptSdk.PRODUCTSRESPONSE](docs/PRODUCTSRESPONSE.md)
 - [GotitApiJavascriptSdk.PRODUCTSRESPONSEDataInner](docs/PRODUCTSRESPONSEDataInner.md)
 - [GotitApiJavascriptSdk.PRODUCTSVOUCHERCHECK](docs/PRODUCTSVOUCHERCHECK.md)
 - [GotitApiJavascriptSdk.PRODUCTV](docs/PRODUCTV.md)
 - [GotitApiJavascriptSdk.PRODUCTVENDORLINKG](docs/PRODUCTVENDORLINKG.md)
 - [GotitApiJavascriptSdk.REQUESTCHECKSTATUSZNS](docs/REQUESTCHECKSTATUSZNS.md)
 - [GotitApiJavascriptSdk.REQUESTCREATEVOUCHERLINKE](docs/REQUESTCREATEVOUCHERLINKE.md)
 - [GotitApiJavascriptSdk.REQUESTCREATEVOUCHERLINKG](docs/REQUESTCREATEVOUCHERLINKG.md)
 - [GotitApiJavascriptSdk.REQUESTCREATEVOUCHERLINKV](docs/REQUESTCREATEVOUCHERLINKV.md)
 - [GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYEMAIL](docs/REQUESTSENDVOUCHERBYEMAIL.md)
 - [GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYSMS](docs/REQUESTSENDVOUCHERBYSMS.md)
 - [GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYZNS](docs/REQUESTSENDVOUCHERBYZNS.md)
 - [GotitApiJavascriptSdk.STOREPAGINGSCHEMA](docs/STOREPAGINGSCHEMA.md)
 - [GotitApiJavascriptSdk.STOREPRODUCTSCHEMA](docs/STOREPRODUCTSCHEMA.md)
 - [GotitApiJavascriptSdk.STORESRESPONSE](docs/STORESRESPONSE.md)
 - [GotitApiJavascriptSdk.STORESRESPONSEDataInner](docs/STORESRESPONSEDataInner.md)
 - [GotitApiJavascriptSdk.STORESSCHEMA](docs/STORESSCHEMA.md)
 - [GotitApiJavascriptSdk.USAGEMETHODSCHEMA](docs/USAGEMETHODSCHEMA.md)
 - [GotitApiJavascriptSdk.VENDORSCHEMA](docs/VENDORSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERCHECKRESPONSE](docs/VOUCHERCHECKRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERCHECKSCHEMA](docs/VOUCHERCHECKSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERCHECKSCHEMADETAIL](docs/VOUCHERCHECKSCHEMADETAIL.md)
 - [GotitApiJavascriptSdk.VOUCHERCHECKZNSRESPONSE](docs/VOUCHERCHECKZNSRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERCHECKZNSRESPONSEData](docs/VOUCHERCHECKZNSRESPONSEData.md)
 - [GotitApiJavascriptSdk.VOUCHERE](docs/VOUCHERE.md)
 - [GotitApiJavascriptSdk.VOUCHERERESPONSE](docs/VOUCHERERESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERESCHEMA](docs/VOUCHERESCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERG](docs/VOUCHERG.md)
 - [GotitApiJavascriptSdk.VOUCHERGRESPONSE](docs/VOUCHERGRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERGSCHEMA](docs/VOUCHERGSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDEMAILRESPONSE](docs/VOUCHERSENDEMAILRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDEMAILSCHEMA](docs/VOUCHERSENDEMAILSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDSMSRESPONSE](docs/VOUCHERSENDSMSRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDSMSSCHEMA](docs/VOUCHERSENDSMSSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDZNSRESPONSE](docs/VOUCHERSENDZNSRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERSENDZNSRESPONSEData](docs/VOUCHERSENDZNSRESPONSEData.md)
 - [GotitApiJavascriptSdk.VOUCHERV](docs/VOUCHERV.md)
 - [GotitApiJavascriptSdk.VOUCHERVRESPONSE](docs/VOUCHERVRESPONSE.md)
 - [GotitApiJavascriptSdk.VOUCHERVSCHEMA](docs/VOUCHERVSCHEMA.md)
 - [GotitApiJavascriptSdk.VOUCHERVSCHEMAProduct](docs/VOUCHERVSCHEMAProduct.md)


## Documentation for Authorization

Endpoints do not require authorization.

## Running the Example with Docker

### Prerequisites
- Docker
- Docker Compose

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/your-username/gotit-api-javascript-sdk.git
cd gotit-api-javascript-sdk
```

2. Navigate to the example directory:
```bash
cd example
```

3. Create a `.env` file in the example directory with your configuration:
```env
X_GI_AUTHORIZATION=your_authorization_key
PRIVATE_KEY_STR=your_private_key
```

4. Build and run the Docker container:
```bash
docker-compose up --build
```

### Available Endpoints

The example application will be available at `http://localhost:5003`
### Available Endpoints

#### Voucher Endpoints
- `GET /vouchers/e` - Create E voucher
- `GET /vouchers/v` - Create V voucher
- `GET /vouchers/g` - Create G voucher
- `GET /vouchers/send_sms` - Send voucher via SMS
- `GET /vouchers/send_email` - Send voucher via Email
- `GET /vouchers/send_zns` - Send voucher via ZNS
- `GET /vouchers/check_zns` - Check ZNS status
- `GET /vouchers/check_status_voucher` - Check voucher status

#### Brand Endpoints
- `GET /brands` - List all brands
- `GET /brands/{id}` - Get brand details
- `GET /brands/brand_product` - Get brand products

#### Category Endpoints
- `GET /categories` - List all categories
- `GET /categories/category_product` - Get category products

#### Product Endpoints
- `GET /products` - List all products
- `GET /products/{id}` - Get product details
- `GET /products/{id}/stores` - Get product stores

### Troubleshooting

1. If you get a "Private key is empty" error:
   - Make sure you've set the `PRIVATE_KEY_STR` in your `.env` file
   - Verify the environment variables are being passed correctly to the container

2. If the container fails to start:
   - Check the Docker logs: `docker-compose logs`
   - Ensure all required environment variables are set
   - Verify port 5003 is not in use by another application

3. If you need to rebuild the container:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

