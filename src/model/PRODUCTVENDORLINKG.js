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

/**
 * The PRODUCTVENDORLINKG model module.
 * @module model/PRODUCTVENDORLINKG
 * @version 4.0.0
 */
class PRODUCTVENDORLINKG {
    /**
     * Constructs a new <code>PRODUCTVENDORLINKG</code>.
     * @alias module:model/PRODUCTVENDORLINKG
     * @param productId {Number} Product Id. You can see the Products section for the product id. Note: productId type auto convert merchant code does not support creating cover links.
     * @param productPriceId {Number} Product price id. Each product will have 1 or more denomination codes corresponding to the value or converted product size.
     * @param quantity {Number} Number of vouchers to be issued
     */
    constructor(productId, productPriceId, quantity) { 
        
        PRODUCTVENDORLINKG.initialize(this, productId, productPriceId, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productId, productPriceId, quantity) { 
        obj['productId'] = productId;
        obj['productPriceId'] = productPriceId;
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>PRODUCTVENDORLINKG</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PRODUCTVENDORLINKG} obj Optional instance to populate.
     * @return {module:model/PRODUCTVENDORLINKG} The populated <code>PRODUCTVENDORLINKG</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PRODUCTVENDORLINKG();

            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('productPriceId')) {
                obj['productPriceId'] = ApiClient.convertToType(data['productPriceId'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PRODUCTVENDORLINKG</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PRODUCTVENDORLINKG</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PRODUCTVENDORLINKG.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PRODUCTVENDORLINKG.RequiredProperties = ["productId", "productPriceId", "quantity"];

/**
 * Product Id. You can see the Products section for the product id. Note: productId type auto convert merchant code does not support creating cover links.
 * @member {Number} productId
 */
PRODUCTVENDORLINKG.prototype['productId'] = undefined;

/**
 * Product price id. Each product will have 1 or more denomination codes corresponding to the value or converted product size.
 * @member {Number} productPriceId
 */
PRODUCTVENDORLINKG.prototype['productPriceId'] = undefined;

/**
 * Number of vouchers to be issued
 * @member {Number} quantity
 */
PRODUCTVENDORLINKG.prototype['quantity'] = undefined;






export default PRODUCTVENDORLINKG;

