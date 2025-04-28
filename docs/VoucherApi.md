# SampleApi.VoucherApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoucherLinkE**](VoucherApi.md#createVoucherLinkE) | **POST** /api/v4.0/vouchers/e | Create voucher link e
[**createVoucherLinkG**](VoucherApi.md#createVoucherLinkG) | **POST** /api/v4.0/vouchers/g | Create voucher link g
[**createVoucherLinkV**](VoucherApi.md#createVoucherLinkV) | **POST** /api/v4.0/vouchers/v | Create voucher link v



## createVoucherLinkE

> VOUCHERERESPONSE createVoucherLinkE(xGIAuthorization, opts)

Create voucher link e

Create voucher link e

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.VoucherApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTCREATEVOUCHERLINKE': new SampleApi.REQUESTCREATEVOUCHERLINKE() // REQUESTCREATEVOUCHERLINKE | 
};
apiInstance.createVoucherLinkE(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTCREATEVOUCHERLINKE** | [**REQUESTCREATEVOUCHERLINKE**](REQUESTCREATEVOUCHERLINKE.md)|  | [optional] 

### Return type

[**VOUCHERERESPONSE**](VOUCHERERESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVoucherLinkG

> VOUCHERGRESPONSE createVoucherLinkG(xGIAuthorization, opts)

Create voucher link g

Create voucher link g

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.VoucherApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTCREATEVOUCHERLINKG': new SampleApi.REQUESTCREATEVOUCHERLINKG() // REQUESTCREATEVOUCHERLINKG | 
};
apiInstance.createVoucherLinkG(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTCREATEVOUCHERLINKG** | [**REQUESTCREATEVOUCHERLINKG**](REQUESTCREATEVOUCHERLINKG.md)|  | [optional] 

### Return type

[**VOUCHERGRESPONSE**](VOUCHERGRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVoucherLinkV

> VOUCHERVRESPONSE createVoucherLinkV(xGIAuthorization, opts)

Create voucher link v

Create voucher link v

### Example

```javascript
import SampleApi from 'sample_api';

let apiInstance = new SampleApi.VoucherApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTCREATEVOUCHERLINKV': new SampleApi.REQUESTCREATEVOUCHERLINKV() // REQUESTCREATEVOUCHERLINKV | 
};
apiInstance.createVoucherLinkV(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTCREATEVOUCHERLINKV** | [**REQUESTCREATEVOUCHERLINKV**](REQUESTCREATEVOUCHERLINKV.md)|  | [optional] 

### Return type

[**VOUCHERVRESPONSE**](VOUCHERVRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

