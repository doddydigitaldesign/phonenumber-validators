import countryCodes from '../countryCodes.json';
import areaCodes from './areaCodes.json';

const isValidMobileTelephoneNumber ="/^0(?<mobilePrefix>70|72|73|76|79)(?:-?)(?<mobileSubscriber>[0-9]{7})$/";
const isValidLandlineTelephoneNumber = "/^(?<swedishAreaCode>"+areaCodes.join('|')+")(?:-?)(?<landlineSubscriber>[0-9]{5,14})$/";
const isValidInternationalMobileNumber = "/^(?<internationalPrefix>\+|00)(?<countryCode>"+countryCodes.join('|')+")(?<mobilePrefix>70|72|73|76|79)(?:-?)(?<mobileSubscriber>[0-9]{7})$/";
const isValidInternationalLandlineNumber = "/^(?<internationalPrefix>\+|00)(?<countryCode>"+countryCodes.join('|')+")(?<intlAreaCode>[012345689]{1,3})(?:-?)(?<landlineSubscriber>[0-9]{5,14})$/";


export const swedishValidators = {
    mobile: isValidMobileTelephoneNumber,
    landline: isValidLandlineTelephoneNumber,
    intlMobile: isValidInternationalMobileNumber,
    intlLandline: isValidInternationalLandlineNumber,
}