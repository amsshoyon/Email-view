import { Button, Chip, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import React, { SetStateAction, useState } from "react"

interface CustomLinkProps {
    href: URL | string,
    children: React.ReactNode,
    className?: string,
    button?: boolean
}

export const CustomLink = ({ href, children, className, button }: CustomLinkProps) => {
    return (
        <Link href={href} passHref>
            {button
                ? <Button className={className}>{children}</Button>
                : <a className={className}>{children}</a>
            }
        </Link>
    )
}

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------
interface FormGroupProps {
    children: React.ReactNode,
    label: string
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
        if (e.keyCode == 32 && e.target.value.trim()) {
            setValues([...values, e.target.value]);
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

    return (
        <React.Fragment>
            <Box className="mb-2">
                {values.length ?
                    <div className="container">
                        {values.map((item, i) => (
                            <Chip size="small" onDelete={() => handleDelete(item, i)} label={item} key={i} className="mr-2" />
                        ))}
                    </div>
                    : <></>
                }
            </Box>
            <TextField value={currValue}
                onChange={handleChange}
                onKeyDown={handleKeyUp}
                variant="outlined"
                fullWidth
            />
        </React.Fragment>
    )
}