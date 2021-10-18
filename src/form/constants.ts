const lowerCaseRegex = new RegExp(".*[a-z].*");
const upperCaseRegex = new RegExp(".*[A-Z].*");
const numberRegex = new RegExp(".*\\d.*");
const specialCharacterRegex = new RegExp(
    ".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"
);

const nameValidationMessages = {
    required: 'Please provide a name',
    min: 'Your name is too short',
}

const emailValidationMessages = {
    required: 'Please provide e-mail address',
    email: 'Please provide valid e-mail address',
}

const passwordValidationMessages = {
    required: 'Please provide password',
    lowerCase: 'One lowercase character',
    upperCase: 'One uppercase character',
    number: 'One number',
    special: "One special character",
    min: "Must be at least 8 characters in length",
}

export const validationPatterns = {
    lowerCaseRegex,
    upperCaseRegex,
    numberRegex,
    specialCharacterRegex,
}

export const validationMessages = {
    nameValidationMessages,
    emailValidationMessages,
    passwordValidationMessages,
}
