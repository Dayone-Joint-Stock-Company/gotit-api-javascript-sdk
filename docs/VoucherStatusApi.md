# GotitApiSdkJavascript.VoucherStatusApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkVoucher**](VoucherStatusApi.md#checkVoucher) | **GET** /api/v4.0/vouchers/multiple/status/{refId} | Check voucher status



## checkVoucher

> VOUCHERCHECKRESPONSE checkVoucher(xGIAuthorization, refId, opts)

Check voucher status

Check voucher status

### Example

```javascript
import GotitApiSdkJavascript from 'gotit_api_sdk_javascript';

let apiInstance = new GotitApiSdkJavascript.VoucherStatusApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let refId = "voucher_0711_102"; // String | Transaction RefId
let opts = {
  'isExcludeStoreListInfo': true, // Boolean | Exclude store list information
  'storeListPage': 1, // Number | Store Page
  'storeListPageSize': 200 // Number | Store Page Size
};
apiInstance.checkVoucher(xGIAuthorization, refId, opts, (error, data, response) => {
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
 **refId** | **String**| Transaction RefId | 
 **isExcludeStoreListInfo** | **Boolean**| Exclude store list information | [optional] 
 **storeListPage** | **Number**| Store Page | [optional] 
 **storeListPageSize** | **Number**| Store Page Size | [optional] 

### Return type

[**VOUCHERCHECKRESPONSE**](VOUCHERCHECKRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

