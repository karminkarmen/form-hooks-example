import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { GENDER, FIELDS, IFormInputs } from './types';
import { schema } from './schema';

const NonIntegratedFormSchema = () => {
    const { register, handleSubmit, watch, formState, setFocus, getValues } = useForm<IFormInputs>({
        mode: "all",
        reValidateMode: 'onChange',
        shouldFocusError: true,
        criteriaMode: "all",
        resolver: yupResolver(schema, { abortEarly: false }),
    });

    const { isDirty, isValid, errors } = formState;

    useEffect(() => {
        setFocus("name");
    }, [setFocus]);

    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

    const formValues = getValues();
    const passwordValidationMessages = errors.password?.types?.matches as string[];

    console.log({name: watch("name"), formState, formValues})

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor={FIELDS.NAME}>Name</label>
            <input
                id={FIELDS.NAME}
                {...register(FIELDS.NAME)} />
            <span>{errors.name?.message}</span>
            <label htmlFor={FIELDS.SURNAME}>Surname</label>
            <input
                id={FIELDS.SURNAME}
                {...register(FIELDS.SURNAME)} />
            <label htmlFor={FIELDS.EMAIL}>E-mail</label>
            <input
                id={FIELDS.EMAIL}
                {...register(FIELDS.EMAIL)} />
            <span>{errors.email?.message}</span>
            <label htmlFor={FIELDS.GENDER}>Gender</label>
            <select id={FIELDS.GENDER} {...register(FIELDS.GENDER)} >
                <option value={GENDER.FEMALE}>{GENDER.FEMALE}</option>
                <option value={GENDER.MALE}>{GENDER.MALE}</option>
                <option value={GENDER.OTHER}>{GENDER.OTHER}</option>
            </select>
            <label htmlFor={FIELDS.BIRTHDAY}>Birthday</label>
            <input
                type="date"
                id={FIELDS.BIRTHDAY}
                {...register(FIELDS.BIRTHDAY)} />
            <label htmlFor={FIELDS.PASSWORD}>Password</label>
            <input
                id={FIELDS.PASSWORD}
                {...register(FIELDS.PASSWORD)} />
            <span>{errors.password?.message}</span>
            {passwordValidationMessages && (
                <>
                    <p>Your password has to include:</p>
                    <ul>
                        {passwordValidationMessages.map((info: string) => <li>{info}</li>)}
                    </ul>
                </>
            )}
            <label htmlFor={FIELDS.HOBBIES}>Hobbies</label>
            <input
                id={FIELDS.HOBBIES}
                {...register(FIELDS.HOBBIES)} />
            <label htmlFor={FIELDS.ABOUT}>About</label>
            <input
                id={FIELDS.ABOUT}
                {...register(FIELDS.ABOUT)} />
            <input type="submit" disabled={!isDirty || !isValid} />
        </form>
    );
}

export default NonIntegratedFormSchema;
