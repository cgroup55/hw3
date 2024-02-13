import React from 'react'
import { Input } from '@mui/base/Input';
import { FormControl } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
               
            </Box>

        </>
    )
}
