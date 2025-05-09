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
import VOUCHERGSCHEMA from './VOUCHERGSCHEMA';

/**
 * The VOUCHERGRESPONSE model module.
 * @module model/VOUCHERGRESPONSE
 * @version 4.0.0
 */
class VOUCHERGRESPONSE {
    /**
     * Constructs a new <code>VOUCHERGRESPONSE</code>.
     * @alias module:model/VOUCHERGRESPONSE
     */
    constructor() { 
        
        VOUCHERGRESPONSE.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VOUCHERGRESPONSE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VOUCHERGRESPONSE} obj Optional instance to populate.
     * @return {module:model/VOUCHERGRESPONSE} The populated <code>VOUCHERGRESPONSE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VOUCHERGRESPONSE();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('statusCode')) {
                obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [VOUCHERGSCHEMA]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VOUCHERGRESPONSE</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VOUCHERGRESPONSE</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['error'] && !(typeof data['error'] === 'string' || data['error'] instanceof String)) {
            throw new Error("Expected the field `error` to be a primitive type in the JSON string but got " + data['error']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                VOUCHERGSCHEMA.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * HTTP response status
 * @member {String} status
 */
VOUCHERGRESPONSE.prototype['status'] = undefined;

/**
 * HTTP response status codes
 * @member {Number} statusCode
 */
VOUCHERGRESPONSE.prototype['statusCode'] = undefined;

/**
 * Error code
 * @member {String} error
 */
VOUCHERGRESPONSE.prototype['error'] = undefined;

/**
 * Message Error
 * @member {String} message
 */
VOUCHERGRESPONSE.prototype['message'] = undefined;

/**
 * @member {Array.<module:model/VOUCHERGSCHEMA>} data
 */
VOUCHERGRESPONSE.prototype['data'] = undefined;






export default VOUCHERGRESPONSE;

