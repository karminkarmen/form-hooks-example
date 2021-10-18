import * as yup from "yup";
import { validationPatterns, validationMessages } from './constants';
import {FIELDS} from "./types";

const { nameValidationMessages, emailValidationMessages, passwordValidationMessages } = validationMessages;

export const schema = yup.object({
    [FIELDS.NAME]: yup
        .string()
        .required(nameValidationMessages.required)
        .min(3, nameValidationMessages.min),
    [FIELDS.EMAIL]: yup
        .string()
        .required(emailValidationMessages.required)
        .email(emailValidationMessages.email),
    [FIELDS.PASSWORD]: yup
        .string()
        .required(passwordValidationMessages.required)
        .min(8, passwordValidationMessages.min)
        .matches(validationPatterns.lowerCaseRegex, passwordValidationMessages.lowerCase)
        .matches(validationPatterns.upperCaseRegex, passwordValidationMessages.upperCase)
        .matches(validationPatterns.numberRegex, passwordValidationMessages.number)
        .matches(validationPatterns.specialCharacterRegex, passwordValidationMessages.special),
});
