import * as yup from "yup";
import { validationPatterns, validationMessages } from './constants';

const { nameValidationMessages, emailValidationMessages, passwordValidationMessages } = validationMessages;

export const schema = yup.object({
    name: yup
        .string()
        .required(nameValidationMessages.required)
        .min(3, nameValidationMessages.min),
    email: yup
        .string()
        .required(emailValidationMessages.required)
        .email(emailValidationMessages.email),
    password: yup
        .string()
        .required(passwordValidationMessages.required)
        .min(8, passwordValidationMessages.min)
        .matches(validationPatterns.lowerCaseRegex, passwordValidationMessages.lowerCase)
        .matches(validationPatterns.upperCaseRegex, passwordValidationMessages.upperCase)
        .matches(validationPatterns.numberRegex, passwordValidationMessages.number)
        .matches(validationPatterns.specialCharacterRegex, passwordValidationMessages.special),
});
