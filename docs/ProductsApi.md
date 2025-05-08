# GotitApiJavascriptSdk.ProductsApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getListOfProducts**](ProductsApi.md#getListOfProducts) | **GET** /api/v4.0/products | Get all products master data
[**getProductDetail**](ProductsApi.md#getProductDetail) | **GET** /api/v4.0/products/{id} | Get product detail data
[**getStoresOfProduct**](ProductsApi.md#getStoresOfProduct) | **GET** /api/v4.0/products/{id}/stores | Get stores of this product



## getListOfProducts

> PRODUCTSRESPONSE getListOfProducts(xGIAuthorization, page, pageSize, opts)

Get all products master data

Returns all products master data

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.ProductsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let page = 1; // Number | Page
let pageSize = 200; // Number | Page Size
let opts = {
  'minPrice': 1000, // Number | Min price
  'maxPrice': 10000000, // Number | Max price
  'isExcludeStoreListInfo': true, // Boolean | Stores
  'storeListPage': 1, // Number | Store Page
  'storeListPageSize': 200 // Number | Store Page Size
};
apiInstance.getListOfProducts(xGIAuthorization, page, pageSize, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGIAuthorization** | **String**| Authorization | 
 **page** | **Number**| Page | 
 **pageSize** | **Number**| Page Size | 
 **minPrice** | **Number**| Min price | [optional] 
 **maxPrice** | **Number**| Max price | [optional] 
 **isExcludeStoreListInfo** | **Boolean**| Stores | [optional] 
 **storeListPage** | **Number**| Store Page | [optional] 
 **storeListPageSize** | **Number**| Store Page Size | [optional] 

### Return type

[**PRODUCTSRESPONSE**](PRODUCTSRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductDetail

> PRODUCTDETAILRESPONSE getProductDetail(xGIAuthorization, id, opts)

Get product detail data

Returns product detail data

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.ProductsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let id = 1541; // Number | Product ID
let opts = {
  'isExcludeStoreListInfo': true, // Boolean | Exclude store list information
  'storeListPage': 1, // Number | Store Page
  'storeListPageSize': 200 // Number | Store Page Size
};
apiInstance.getProductDetail(xGIAuthorization, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGIAuthorization** | **String**| Authorization | 
 **id** | **Number**| Product ID | 
 **isExcludeStoreListInfo** | **Boolean**| Exclude store list information | [optional] 
 **storeListPage** | **Number**| Store Page | [optional] 
 **storeListPageSize** | **Number**| Store Page Size | [optional] 

### Return type

[**PRODUCTDETAILRESPONSE**](PRODUCTDETAILRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStoresOfProduct

> STORESRESPONSE getStoresOfProduct(xGIAuthorization, id)

Get stores of this product

Returns all stores of this product

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.ProductsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let id = 1541; // Number | Product ID
apiInstance.getStoresOfProduct(xGIAuthorization, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGIAuthorization** | **String**| Authorization | 
 **id** | **Number**| Product ID | 

### Return type

[**STORESRESPONSE**](STORESRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

