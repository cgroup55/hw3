import React from 'react'
import { Input } from '@mui/base/Input';
import { FormControl } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Today } from '@mui/icons-material';
import { Autocomplete } from '@mui/material';

export default function Register() {
    const options = ['TLV', 'HAIFA', 'NETANYA', 'NYC', 'BNK'];


    return (

        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m:2, width: '50ch' },
                }}
                noValidate
                autoComplete="off"

            >
                <div>
                    <h1>Register to the Website</h1>
                    <TextField
                        required
                        id="outlined-username-required"
                        label="User Name"
                        inputProps={{ maxLength: 60 }}
                    />

                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        inputProps={{ maxLength: 12, minLength: 7 }}
                    />
                    <TextField
                        required
                        id="outlined-passwordv-input"
                        label="Validate Password"
                        type="password"
                        inputProps={{ maxLength: 12, minLength: 7 }}
                    />

                    <TextField
                        required
                        label="Upload Image"
                        id="image-input"
                        accept="image/*"
                        type='file'
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <TextField
                        required
                        id="firstname-input"
                        label="First Name"
                        type="text"

                    />
                    <TextField
                        required
                        id="lastname-input"
                        label="Last Name"
                        type="text"

                    />
                    <TextField
                        required
                        id="email-input"
                        label="Email"
                        type="text"

                    />
                    <TextField
                        required
                        id="dateofbirth-input"
                        label="Date Of Birth"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}

                    />
                    <Autocomplete
                    
                        options={options}
                        renderInput={(params) => (
                            <TextField
                            sx={{
                                '& .MuiTextField-root': { m:1, width: '100%' },
                            }}
                                {...params}
                                required
                                label="City"
                                variant="outlined"
                            />
                        )}
                    />
                    <TextField
                        required
                        id="streetname-input"
                        label="Street Name"
                        type="text"
                    />
                      <TextField
                        required
                        id="number-input"
                        label="Number"
                        type="number"
                        //can i add a min value?
                    />
                </div>

            </Box>

        </>

    )
}
