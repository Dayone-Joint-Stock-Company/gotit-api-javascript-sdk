/**
 * Sample API
 * Technical document APIs for API Version 4.
 *
 * The version of the OpenAPI document: 4.0.0
 * Contact: quang.huynh@gotit.vn
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SampleApi);
  }
}(this, function(expect, SampleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SampleApi.PRODUCTDETAIL();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PRODUCTDETAIL', function() {
    it('should create an instance of PRODUCTDETAIL', function() {
      // uncomment below and update the code to test PRODUCTDETAIL
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be.a(SampleApi.PRODUCTDETAIL);
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productNm (base name: "productNm")', function() {
      // uncomment below and update the code to test the property productNm
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productImg (base name: "productImg")', function() {
      // uncomment below and update the code to test the property productImg
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productSubImg (base name: "productSubImg")', function() {
      // uncomment below and update the code to test the property productSubImg
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandId (base name: "brandId")', function() {
      // uncomment below and update the code to test the property brandId
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandNm (base name: "brandNm")', function() {
      // uncomment below and update the code to test the property brandNm
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productType (base name: "productType")', function() {
      // uncomment below and update the code to test the property productType
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandNameSlug (base name: "brandNameSlug")', function() {
      // uncomment below and update the code to test the property brandNameSlug
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandPhone (base name: "brandPhone")', function() {
      // uncomment below and update the code to test the property brandPhone
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandAddress (base name: "brandAddress")', function() {
      // uncomment below and update the code to test the property brandAddress
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandDesc (base name: "brandDesc")', function() {
      // uncomment below and update the code to test the property brandDesc
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandServiceGuide (base name: "brandServiceGuide")', function() {
      // uncomment below and update the code to test the property brandServiceGuide
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property serviceGuide (base name: "serviceGuide")', function() {
      // uncomment below and update the code to test the property serviceGuide
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandLogo (base name: "brandLogo")', function() {
      // uncomment below and update the code to test the property brandLogo
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property prices (base name: "prices")', function() {
      // uncomment below and update the code to test the property prices
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property nameSlug (base name: "nameSlug")', function() {
      // uncomment below and update the code to test the property nameSlug
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productDesc (base name: "productDesc")', function() {
      // uncomment below and update the code to test the property productDesc
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property productShortDesc (base name: "productShortDesc")', function() {
      // uncomment below and update the code to test the property productShortDesc
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "categoryId")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property categoryNm (base name: "categoryNm")', function() {
      // uncomment below and update the code to test the property categoryNm
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property categoryImg (base name: "categoryImg")', function() {
      // uncomment below and update the code to test the property categoryImg
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property brandRedeem (base name: "brandRedeem")', function() {
      // uncomment below and update the code to test the property brandRedeem
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

    it('should have the property storeList (base name: "storeList")', function() {
      // uncomment below and update the code to test the property storeList
      //var instance = new SampleApi.PRODUCTDETAIL();
      //expect(instance).to.be();
    });

  });

}));
