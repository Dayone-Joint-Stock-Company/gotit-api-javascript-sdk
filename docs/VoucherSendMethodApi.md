# GotitApiJavascriptSdk.VoucherSendMethodApi

All URIs are relative to *https://api-biz-stg.gotit.vn*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkStatusZNS**](VoucherSendMethodApi.md#checkStatusZNS) | **POST** /api/v4.0/vouchers/send/zns/check | Check status zns
[**sendVoucherByEmail**](VoucherSendMethodApi.md#sendVoucherByEmail) | **POST** /api/v4.0/vouchers/send/email | Send voucher by mail
[**sendVoucherBySMS**](VoucherSendMethodApi.md#sendVoucherBySMS) | **POST** /api/v4.0/vouchers/send/sms | Send voucher by sms
[**sendVoucherByZNS**](VoucherSendMethodApi.md#sendVoucherByZNS) | **POST** /api/v4.0/vouchers/send/zns | Send voucher by zns



## checkStatusZNS

> VOUCHERCHECKZNSRESPONSE checkStatusZNS(xGIAuthorization, opts)

Check status zns

Check status zns

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.VoucherSendMethodApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTCHECKSTATUSZNS': new GotitApiJavascriptSdk.REQUESTCHECKSTATUSZNS() // REQUESTCHECKSTATUSZNS | 
};
apiInstance.checkStatusZNS(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTCHECKSTATUSZNS** | [**REQUESTCHECKSTATUSZNS**](REQUESTCHECKSTATUSZNS.md)|  | [optional] 

### Return type

[**VOUCHERCHECKZNSRESPONSE**](VOUCHERCHECKZNSRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendVoucherByEmail

> VOUCHERSENDEMAILRESPONSE sendVoucherByEmail(xGIAuthorization, opts)

Send voucher by mail

Send voucher by mail

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.VoucherSendMethodApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTSENDVOUCHERBYEMAIL': new GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYEMAIL() // REQUESTSENDVOUCHERBYEMAIL | 
};
apiInstance.sendVoucherByEmail(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTSENDVOUCHERBYEMAIL** | [**REQUESTSENDVOUCHERBYEMAIL**](REQUESTSENDVOUCHERBYEMAIL.md)|  | [optional] 

### Return type

[**VOUCHERSENDEMAILRESPONSE**](VOUCHERSENDEMAILRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendVoucherBySMS

> VOUCHERSENDSMSRESPONSE sendVoucherBySMS(xGIAuthorization, REQUESTSENDVOUCHERBYSMS)

Send voucher by sms

Send voucher by sms

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.VoucherSendMethodApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let REQUESTSENDVOUCHERBYSMS = new GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYSMS(); // REQUESTSENDVOUCHERBYSMS | 
apiInstance.sendVoucherBySMS(xGIAuthorization, REQUESTSENDVOUCHERBYSMS, (error, data, response) => {
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
 **REQUESTSENDVOUCHERBYSMS** | [**REQUESTSENDVOUCHERBYSMS**](REQUESTSENDVOUCHERBYSMS.md)|  | 

### Return type

[**VOUCHERSENDSMSRESPONSE**](VOUCHERSENDSMSRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sendVoucherByZNS

> VOUCHERSENDZNSRESPONSE sendVoucherByZNS(xGIAuthorization, opts)

Send voucher by zns

Send voucher by zns

### Example

```javascript
import GotitApiJavascriptSdk from 'gotit-api-javascript-sdk';

let apiInstance = new GotitApiJavascriptSdk.VoucherSendMethodApi();
let xGIAuthorization = "API key GotIt provided"; // String | Authorization
let opts = {
  'REQUESTSENDVOUCHERBYZNS': new GotitApiJavascriptSdk.REQUESTSENDVOUCHERBYZNS() // REQUESTSENDVOUCHERBYZNS | 
};
apiInstance.sendVoucherByZNS(xGIAuthorization, opts, (error, data, response) => {
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
 **REQUESTSENDVOUCHERBYZNS** | [**REQUESTSENDVOUCHERBYZNS**](REQUESTSENDVOUCHERBYZNS.md)|  | [optional] 

### Return type

[**VOUCHERSENDZNSRESPONSE**](VOUCHERSENDZNSRESPONSE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

