export const nameRegex = /^[a-zA-Z]+$/;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
export const reqTitleRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{8,70}$/;
export const reqDespRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{20,}$/;
export const reqPriceRegex = /^[1-9]\d*(\.\d+)?$/;
export const reqTagsRegex = /^[A-Za-z][\w\s\!\#\$\%\&*\)\(+=\._-]{2,}$/;
export const phoneNumberRegex =
  /^((\+92)|(92))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
export const zipCodeRegex = /^\d{5}(?:[-\s]\d{4})?$/;
export const creditCardRegex = /^(?:[4-7][0-9]{12}(?:[0-9]{3})?)$/;
export const monthRegex = /^(0[1-9]|1[012])$/;
export const yearRegex = /^(19|20)\d{2}$/;
export const addressRegex = /^\s*\S+(?:\s+\S+){2}/;
export const countryRegex = /[a-zA-Z]{2,}/;
export const cityRegex = /[a-zA-Z]{2,}/;

export function validate(value, regex, message) {
  if (value === '' || value == null || String(() => value.trim()) === '') {
    return 'This field is requried';
  } else {
    if (regex.test(value)) {
      return null;
    } else {
      return message;
    }
  }
}
