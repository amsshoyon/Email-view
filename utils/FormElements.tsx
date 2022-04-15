import { Button, Chip, Stack, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import React, { SetStateAction, useState } from "react"
import { EmailRegex } from "./validator"

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface FormGroupProps {
    children: React.ReactNode,
    label?: string
}

export const FormGroup = ({ children, label }: FormGroupProps) => {
    return (
        <Box className="mb-3">
            <Typography className="mb-2">{label}</Typography>
            {children}
        </Box>
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface FileInputProps {
    accept: string,
    onChange: Function
}

export const FileInput = (props: FileInputProps) => {
    return (
        <TextField type='File'
            variant="outlined"
            inputProps={{ accept: props.accept }}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            disabled={false}
            onChange={(event) => props.onChange(event)}
        />
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface MultiValueInputProps {
    value: string[],
    defaultValue?: string,
    onChange?: Function
}

export const MultiValueInput = (props: MultiValueInputProps) => {
    const [values, setValues] = useState(props.value ? props.value : []);
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

    const StackLabel = ()=> {
        return (
            <React.Fragment>
                {values.length ?
                <Box className="mb-2 flex" sx={{flexWrap: 'wrap'}}>
                    {values.map((item, i) => (
                        <Chip variant="outlined" 
                            size="small" 
                            onDelete={() => handleDelete(item, i)} 
                            label={item} key={i} 
                            sx={{margin: '0 4px 4px 0'}}
                        />
                    ))}
                </Box> 
                : <></>
            }
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            
            {StackLabel()}

            <TextField value={currValue}
                onChange={handleChange}
                onKeyDown={handleKeyUp}
                variant="outlined"
                fullWidth
                type="email"
            />
        </React.Fragment>
    )
}