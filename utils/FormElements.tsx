import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Chip, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, { ChangeEventHandler, SetStateAction, useState } from "react"
import { EmailRegex } from "./validator"

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface MultiValueInputProps {
    label?: string,
    name: string,
    value: string[],
    defaultValue?: string,
    errors: any,
    touched: any,
    onBlur: ChangeEventHandler,
    onChange: ChangeEventHandler,
    className?: string
}

export const MultiValueInput = ({ name, label, className, value, defaultValue, errors, touched, onChange, onBlur, ...rest }: MultiValueInputProps) => {
    const [values, setValues] = useState(value ? value : []);
    const [currValue, setCurrValue] = useState<string>("");

    const handleKeyUp = (e: any): void => {
        let value = e.target.value;
        if (e.keyCode == 32 && value.trim() && EmailRegex.test(value)) {
            setValues([...values, value]);
            setCurrValue("");
        }
    };

    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setCurrValue(e.target.value);
    };

    const handleDelete = (item: string, index: number) => {
        let arr = [...values]
        arr.splice(index, 1)
        setValues(arr)
    }

    const StackLabel = () => {
        return (
            <React.Fragment>
                {values.length ?
                    <Box className="mb-2 flex" sx={{ flexWrap: 'wrap' }}>
                        {values.map((item, i) => (
                            <Chip variant="outlined"
                                size="small"
                                onDelete={() => handleDelete(item, i)}
                                label={item} key={i}
                                sx={{ margin: '0 4px 4px 0' }}
                            />
                        ))}
                    </Box>
                    : <></>
                }
            </React.Fragment>
        )
    }

    return (
        <Box className={className}>
            {StackLabel()}
            <TextField value={currValue}
                label={label}
                onChange={handleChange}
                onBlur={onBlur}
                onKeyDown={handleKeyUp}
                variant="outlined"
                fullWidth
                type="email"
                {...rest}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    autoComplete: 'new-password',
                    form: { autoComplete: 'off' },
                }}
                error={errors[name] && touched[name] ? true : false}
                helperText={errors[name] && touched[name] ? errors[name] : ''}
            />
        </Box>
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface FormikTextFieldProps {
    type?: string,
    label?: string,
    name: string,
    value?: string | number,
    errors?: any,
    touched?: any,
    onBlur?: ChangeEventHandler,
    onChange?: ChangeEventHandler,
    accept?: string,
    className?: string,
    dynamicFieldName?: string,
    rows?: number,
    multiline?: boolean
}

export const FormikTextField = (props: FormikTextFieldProps) => {
    const { name, className='mb-6', type = 'text', label, onChange, onBlur, accept, value, errors, touched, dynamicFieldName, multiline=false, rows, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);
    const fieldName = dynamicFieldName ? dynamicFieldName : name;
    return (
        <TextField
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            label={label}
            name={name}
            variant="outlined"
            className={className}
            value={value}
            fullWidth
            onChange={onChange}
            onBlur={onBlur}
            error={errors[fieldName] && touched[fieldName] ? true : false}
            helperText={errors[fieldName] && touched[fieldName] ? errors[fieldName] : ''}
            {...rest}
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                autoComplete: 'new-password',
                form: { autoComplete: 'off' },
            }}
            InputProps={{
                endAdornment:
                    type === "password" ? (
                        <InputAdornment
                            position="start"
                            classes={{ positionStart: "0px" }}
                        >
                            <IconButton
                                onClick={()=>setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ) : null,
            }}
            rows={rows}
            multiline={multiline}
        />
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------