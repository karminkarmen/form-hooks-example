import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { GENDER, FIELDS, IFormInputs } from './types';
import { schema } from './schema';

const IntegratedMUIFormSchema = () => {
    const { handleSubmit, watch, formState, setFocus, getValues, control } = useForm<IFormInputs>({
        mode: "all",
        reValidateMode: 'onChange',
        shouldFocusError: true,
        criteriaMode: "all",
        resolver: yupResolver(schema, { abortEarly: false }),
    });

    const { isDirty, isValid, errors } = formState;

    useEffect(() => {
        setFocus(FIELDS.NAME);
    }, [setFocus]);

    const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

    const formValues = getValues();
    const passwordValidationMessages = errors.password?.types?.matches;
    const passwordMinMessage = errors.password?.types?.min;

    console.log({name: watch("name"), formState, formValues})

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name={FIELDS.NAME}
                control={control}
                // @ts-ignore
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        required
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        variant="standard"
                        id={FIELDS.NAME}
                        label={FIELDS.NAME}/>
                )} />
            <Controller
                name={FIELDS.SURNAME}
                control={control}
                // @ts-ignore
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="standard"
                        id={FIELDS.SURNAME}
                        label={FIELDS.SURNAME}/>
                )} />
            <Controller
                name={FIELDS.EMAIL}
                control={control}
                // @ts-ignore
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        required
                        variant="standard"
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        id={FIELDS.EMAIL}
                        label={FIELDS.EMAIL}/>
                )} />
            <Controller
                name={FIELDS.GENDER}
                control={control}
                // @ts-ignore
                defaultValue=""
                render={({ field }) => (
                    <FormControl>
                        <InputLabel id={FIELDS.GENDER}>{FIELDS.GENDER}</InputLabel>
                        <Select
                            {...field}
                            labelId={FIELDS.GENDER}
                            label={FIELDS.GENDER}
                        >
                            <MenuItem value={GENDER.FEMALE}>{GENDER.FEMALE}</MenuItem>
                            <MenuItem value={GENDER.MALE}>{GENDER.MALE}</MenuItem>
                            <MenuItem value={GENDER.OTHER}>{GENDER.OTHER}</MenuItem>
                        </Select>
                    </FormControl>
                )} />
            <Controller
                name={FIELDS.BIRTHDAY}
                control={control}
                // @ts-ignore
                render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            {...field}
                            label={FIELDS.BIRTHDAY}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                )} />
            <Controller
                name={FIELDS.PASSWORD}
                control={control}
                // @ts-ignore
                defaultValue=""
                render={({ field }) => (
                    <TextField
                        {...field}
                        required
                        type="password"
                        variant="standard"
                        error={!!errors.password}
                        helperText={(
                            <>
                                {passwordMinMessage}
                                {passwordValidationMessages && (
                                    <>
                                        <p>Your password has to include:</p>
                                        <ul>
                                            {Array.isArray(passwordValidationMessages)
                                                ? passwordValidationMessages.map((info: string) => <li>{info}</li>)
                                                : <li>{passwordValidationMessages}</li>
                                            }
                                        </ul>
                                    </>
                                )}
                            </>
                        )}
                        id={FIELDS.PASSWORD}
                        label={FIELDS.PASSWORD}/>
                )} />
            <Button
                disabled={!isDirty || !isValid}
                type="submit"
                variant="contained">
                Submit
            </Button>
        </form>
    );
}

export default IntegratedMUIFormSchema;
