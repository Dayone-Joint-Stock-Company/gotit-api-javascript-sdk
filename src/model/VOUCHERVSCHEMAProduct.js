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

import ApiClient from '../ApiClient';
import PRODUCTPRICESCHEMA from './PRODUCTPRICESCHEMA';
import PRODUCTV from './PRODUCTV';
import STOREPRODUCTSCHEMA from './STOREPRODUCTSCHEMA';

/**
 * The VOUCHERVSCHEMAProduct model module.
 * @module model/VOUCHERVSCHEMAProduct
 * @version 4.0.0
 */
class VOUCHERVSCHEMAProduct {
    /**
     * Constructs a new <code>VOUCHERVSCHEMAProduct</code>.
     * @alias module:model/VOUCHERVSCHEMAProduct
     * @param {(module:model/PRODUCTV)} instance The actual instance to initialize VOUCHERVSCHEMAProduct.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "PRODUCTV") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                PRODUCTV.validateJSON(instance); // throw an exception if no match
                // create PRODUCTV from JS object
                this.actualInstance = PRODUCTV.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into PRODUCTV
            errorMessages.push("Failed to construct PRODUCTV: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `VOUCHERVSCHEMAProduct` with oneOf schemas PRODUCTV. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `VOUCHERVSCHEMAProduct` with oneOf schemas PRODUCTV. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>VOUCHERVSCHEMAProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VOUCHERVSCHEMAProduct} obj Optional instance to populate.
     * @return {module:model/VOUCHERVSCHEMAProduct} The populated <code>VOUCHERVSCHEMAProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        return new VOUCHERVSCHEMAProduct(data);
    }

    /**
     * Gets the actual instance, which can be <code>PRODUCTV</code>.
     * @return {(module:model/PRODUCTV)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>PRODUCTV</code>.
     * @param {(module:model/PRODUCTV)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = VOUCHERVSCHEMAProduct.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of VOUCHERVSCHEMAProduct from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/VOUCHERVSCHEMAProduct} An instance of VOUCHERVSCHEMAProduct.
     */
    static fromJSON = function(json_string){
        return VOUCHERVSCHEMAProduct.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Product Id
 * @member {Number} productId
 */
VOUCHERVSCHEMAProduct.prototype['productId'] = undefined;

/**
 * Product Name
 * @member {String} productNm
 */
VOUCHERVSCHEMAProduct.prototype['productNm'] = undefined;

/**
 * Link product image
 * @member {String} productImg
 */
VOUCHERVSCHEMAProduct.prototype['productImg'] = undefined;

/**
 * Brand id
 * @member {Number} brandId
 */
VOUCHERVSCHEMAProduct.prototype['brandId'] = undefined;

/**
 * Brand name
 * @member {String} brandNm
 */
VOUCHERVSCHEMAProduct.prototype['brandNm'] = undefined;

/**
 * @member {String} brandServiceGuide
 */
VOUCHERVSCHEMAProduct.prototype['brandServiceGuide'] = undefined;

/**
 * @member {String} link
 */
VOUCHERVSCHEMAProduct.prototype['link'] = undefined;

/**
 * @member {module:model/PRODUCTPRICESCHEMA} price
 */
VOUCHERVSCHEMAProduct.prototype['price'] = undefined;

/**
 * @member {String} productDesc
 */
VOUCHERVSCHEMAProduct.prototype['productDesc'] = undefined;

/**
 * @member {String} terms
 */
VOUCHERVSCHEMAProduct.prototype['terms'] = undefined;

/**
 * @member {String} productType
 */
VOUCHERVSCHEMAProduct.prototype['productType'] = undefined;

/**
 * @member {Array.<module:model/STOREPRODUCTSCHEMA>} storeList
 */
VOUCHERVSCHEMAProduct.prototype['storeList'] = undefined;


VOUCHERVSCHEMAProduct.OneOf = ["PRODUCTV"];

export default VOUCHERVSCHEMAProduct;

