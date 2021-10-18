export enum GENDER {
    FEMALE = "female",
    MALE = "male",
    OTHER = "other"
}

export enum FIELDS {
    NAME = 'name',
    SURNAME = 'surname',
    GENDER = 'gender',
    EMAIL = 'email',
    BIRTHDAY = 'birthday',
    PASSWORD = 'password',
    HOBBIES = 'hobbies',
    ABOUT = 'about',
}

export interface IFormInputs {
    name: string,
    surname: string,
    email: string,
    gender: GENDER,
    birthday: string,
    password: string,
    hobbies: string,
    about: string,
}
