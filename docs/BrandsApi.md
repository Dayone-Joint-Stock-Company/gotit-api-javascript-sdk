# GotitApiJavascriptSdk.BrandsApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**brandsByProducts**](BrandsApi.md#brandsByProducts) | **GET** /api/v4.0/brands/brandsByProducts | Get brand by product
[**getDetailOfBrand**](BrandsApi.md#getDetailOfBrand) | **GET** /api/v4.0/brands/{id} | Get brand detail
[**getListOfBrands**](BrandsApi.md#getListOfBrands) | **GET** /api/v4.0/brands | Get list of brands



## brandsByProducts

> BRANDDETAILRESPONSE brandsByProducts(xGIAuthorization)

Get brand by product

Returns brand detail data master

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.BrandsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
apiInstance.brandsByProducts(xGIAuthorization, (error, data, response) => {
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

### Return type

[**BRANDDETAILRESPONSE**](BRANDDETAILRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDetailOfBrand

> BRANDDETAILRESPONSE getDetailOfBrand(xGIAuthorization, id)

Get brand detail

Returns brand detail data master

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.BrandsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let id = 46; // Number | Brand Id
apiInstance.getDetailOfBrand(xGIAuthorization, id, (error, data, response) => {
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
 **id** | **Number**| Brand Id | 

### Return type

[**BRANDDETAILRESPONSE**](BRANDDETAILRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfBrands

> BRANDSRESPONSE getListOfBrands(xGIAuthorization)

Get list of brands

Retrieve a list of brands

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.BrandsApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
apiInstance.getListOfBrands(xGIAuthorization, (error, data, response) => {
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

### Return type

[**BRANDSRESPONSE**](BRANDSRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

