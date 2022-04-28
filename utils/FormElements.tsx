import { Visibility, VisibilityOff, Preview } from "@mui/icons-material"
import { Button, Chip, IconButton, InputAdornment, Link, TextField } from "@mui/material"
import { Box } from "@mui/system"
import React, { ChangeEventHandler, SetStateAction, useEffect, useState } from "react"
import { ToBase64 } from "./common"
import { EmailRegex } from "./validator"

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface MultiValueInputProps {
    label?: string,
    name: string,
    value: string,
    defaultValue?: string,
    errors: any,
    touched: any,
    onBlur: ChangeEventHandler,
    onChange: Function,
    className?: string
}

export const MultiValueInput = (props: MultiValueInputProps) => {
    const { name, label, className='mb-6', value, defaultValue, errors, touched, onChange, onBlur, ...rest } = props;
    const [values, setValues] = useState(value ? value.split(',') : []);
    const [currValue, setCurrValue] = useState<string>("");

    const handleKeyUp = (e: any): void => {
        let value = e.target.value;
        if (e.keyCode == 32 && value.trim() && EmailRegex.test(value)) {
            onChange([...values, value].toString());
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

    useEffect(()=>{
        setValues(value ? value.split(',') : []);
    },[value])

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
    onChange?: any,
    accept?: string,
    className?: string,
    dynamicFieldName?: string,
    rows?: number,
    multiline?: boolean,
    url?: string
}

export const FormikTextField = (props: FormikTextFieldProps) => {
    const { name, className='mb-6', type = 'text', label, onChange, onBlur, accept, value, errors, touched, dynamicFieldName, multiline=false, url, rows, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [urlPath, setUrlPath] = useState(url);
    const fieldName = dynamicFieldName ? dynamicFieldName : name;

    const handleChange = async (e: any)=> {
        if(type === 'file') {
            const file = e.target.files[0];
            const base64 = await ToBase64(file);
            onChange(base64);
            setUrlPath('')
        } else onChange(e);
    }

    return (
        <TextField
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            label={label}
            name={name}
            variant="outlined"
            className={className}
            value={value}
            fullWidth
            onChange={(e)=> handleChange(e)}
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
                        <InputAdornment position="start" classes={{ positionStart: "0px" }}>
                            <IconButton onClick={()=>setShowPassword(!showPassword)} >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ) 
                    : type === 'file' && urlPath ?
                        <InputAdornment position="start" classes={{ positionStart: "0px" }}>
                            <Button component={Link} href={urlPath} className='capitalize' target={'_blank'}>
                                <Preview />&nbsp; Preview
                            </Button>
                            
                        </InputAdornment>
                    : null
                    ,
            }}
            rows={rows}
            multiline={multiline}
        />
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------