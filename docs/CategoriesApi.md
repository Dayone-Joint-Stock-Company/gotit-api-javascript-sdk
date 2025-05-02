# GotitApiSdkJavascript.CategoriesApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCategoryByProduct**](CategoriesApi.md#getCategoryByProduct) | **GET** /api/v4.0/categories/categoriesByProducts | Get category by product
[**getListOfCategories**](CategoriesApi.md#getListOfCategories) | **GET** /api/v4.0/categories | Get lists category



## getCategoryByProduct

> CATEGORIESRESPONSE getCategoryByProduct(xGIAuthorization)

Get category by product

Returns all categories data master

### Example

```javascript
import GotitApiSdkJavascript from 'gotit_api_sdk_javascript';

let apiInstance = new GotitApiSdkJavascript.CategoriesApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
apiInstance.getCategoryByProduct(xGIAuthorization, (error, data, response) => {
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

[**CATEGORIESRESPONSE**](CATEGORIESRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfCategories

> CATEGORIESRESPONSE getListOfCategories(xGIAuthorization)

Get lists category

Returns all categories data master

### Example

```javascript
import GotitApiSdkJavascript from 'gotit_api_sdk_javascript';

let apiInstance = new GotitApiSdkJavascript.CategoriesApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
apiInstance.getListOfCategories(xGIAuthorization, (error, data, response) => {
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

[**CATEGORIESRESPONSE**](CATEGORIESRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

