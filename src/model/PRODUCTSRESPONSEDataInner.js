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
import PAGINGSCHEMA from './PAGINGSCHEMA';
import PRODUCTSALLDETAIL from './PRODUCTSALLDETAIL';

/**
 * The PRODUCTSRESPONSEDataInner model module.
 * @module model/PRODUCTSRESPONSEDataInner
 * @version 4.0.0
 */
class PRODUCTSRESPONSEDataInner {
    /**
     * Constructs a new <code>PRODUCTSRESPONSEDataInner</code>.
     * @alias module:model/PRODUCTSRESPONSEDataInner
     */
    constructor() { 
        
        PRODUCTSRESPONSEDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PRODUCTSRESPONSEDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PRODUCTSRESPONSEDataInner} obj Optional instance to populate.
     * @return {module:model/PRODUCTSRESPONSEDataInner} The populated <code>PRODUCTSRESPONSEDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PRODUCTSRESPONSEDataInner();

            if (data.hasOwnProperty('productList')) {
                obj['productList'] = ApiClient.convertToType(data['productList'], [PRODUCTSALLDETAIL]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = PAGINGSCHEMA.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PRODUCTSRESPONSEDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PRODUCTSRESPONSEDataInner</code>.
     */
    static validateJSON(data) {
        if (data['productList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['productList'])) {
                throw new Error("Expected the field `productList` to be an array in the JSON data but got " + data['productList']);
            }
            // validate the optional field `productList` (array)
            for (const item of data['productList']) {
                PRODUCTSALLDETAIL.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          PAGINGSCHEMA.validateJSON(data['pagination']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/PRODUCTSALLDETAIL>} productList
 */
PRODUCTSRESPONSEDataInner.prototype['productList'] = undefined;

/**
 * @member {module:model/PAGINGSCHEMA} pagination
 */
PRODUCTSRESPONSEDataInner.prototype['pagination'] = undefined;






export default PRODUCTSRESPONSEDataInner;

