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
import STORESSCHEMA from './STORESSCHEMA';

/**
 * The STORESRESPONSEDataInner model module.
 * @module model/STORESRESPONSEDataInner
 * @version 4.0.0
 */
class STORESRESPONSEDataInner {
    /**
     * Constructs a new <code>STORESRESPONSEDataInner</code>.
     * @alias module:model/STORESRESPONSEDataInner
     */
    constructor() { 
        
        STORESRESPONSEDataInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>STORESRESPONSEDataInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/STORESRESPONSEDataInner} obj Optional instance to populate.
     * @return {module:model/STORESRESPONSEDataInner} The populated <code>STORESRESPONSEDataInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new STORESRESPONSEDataInner();

            if (data.hasOwnProperty('storeList')) {
                obj['storeList'] = ApiClient.convertToType(data['storeList'], [STORESSCHEMA]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>STORESRESPONSEDataInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>STORESRESPONSEDataInner</code>.
     */
    static validateJSON(data) {
        if (data['storeList']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['storeList'])) {
                throw new Error("Expected the field `storeList` to be an array in the JSON data but got " + data['storeList']);
            }
            // validate the optional field `storeList` (array)
            for (const item of data['storeList']) {
                STORESSCHEMA.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/STORESSCHEMA>} storeList
 */
STORESRESPONSEDataInner.prototype['storeList'] = undefined;






export default STORESRESPONSEDataInner;

