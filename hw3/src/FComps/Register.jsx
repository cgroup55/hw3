import React, { useState } from 'react'
import { Input } from '@mui/base/Input';
import { FormControl } from '@mui/base';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Autocomplete } from '@mui/material';

export default function Register() {
    const options = ['TLV', 'HAIFA', 'NETANYA', 'NYC', 'BNK'];
    //create a combined state to update all the user input info
    const [user, setuser] = useState({});//input
    const [userError, setuserError] = useState({});//input validity
    const [userErrorMsg, setuserErrorMsg] = useState({});//error message

    //validation functions

    const validateuserName = (e) => {

        let text = e.target.value;
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]{1,60}$/;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, username: text } });
            setuserError(prev => { return { ...prev, username: false } });
            setuserErrorMsg(prev => { return { ...prev, username: "" } });
        } else {
            setuserError(prev => { return { ...prev, username: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, username:
                        "Invalid username - cannot contain forgien letters or exceed 60 chars"
                }
            });
        }
    };

    const validatePassword = (e) => {
        let text = e.target.value;
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?])[a-zA-Z\d!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]{7,12}$/;
        if (regex.test(text)) {
            setuser(prev => { return { ...prev, password: text } });
            setuserError(prev => { return { ...prev, password: false } });
            setuserErrorMsg(prev => { return { ...prev, password: "" } });
        } else {
            setuserError(prev => { return { ...prev, password: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, password:
                        "Invalid password - must contain a special character, a number, and a capital letter"
                }
            });
        }
    };

    const validate2Password = (e) => {
        let password = user.password;
        let validPass = e.target.value;
        if (password == validPass) {
            setuser(prev => { return { ...prev, passwordv: validPass } });
            setuserError(prev => { return { ...prev, passwordv: false } });
            setuserErrorMsg(prev => { return { ...prev, passwordv: "" } });
        } else {
            setuserError(prev => { return { ...prev, passwordv: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, passwordv:
                        "Passwords dont match"
                }
            });
        }
    };

    const validateImage = (e) => { }//continue this validation and learn to upload a file

    const validatefirstName = (e) => {

        let text = e.target.value;
        const regex = /^[A-Za-z]{3,}$/;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, firstname: text } });
            setuserError(prev => { return { ...prev, firstname: false } });
            setuserErrorMsg(prev => { return { ...prev, firstname: "" } });
        } else {
            setuserError(prev => { return { ...prev, firstname: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, firstname:
                        "use only english letters- at least 3"
                }
            });
        }
    };
    const validatelastName = (e) => {

        let text = e.target.value;
        const regex = /^[A-Za-z]{3,}$/;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, lastname: text } });
            setuserError(prev => { return { ...prev, lastname: false } });
            setuserErrorMsg(prev => { return { ...prev, lastname: "" } });
        } else {
            setuserError(prev => { return { ...prev, lastname: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, lastname:
                        "use only english letters- at least 3"
                }
            });
        }
    };

    const validateEmail = (e) => {

        let text = e.target.value;
        const regex = /^[^\s@]+@[^\s@]+\.(?:com)$/i;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, email: text } });
            setuserError(prev => { return { ...prev, email: false } });
            setuserErrorMsg(prev => { return { ...prev, email: "" } });
        } else {
            setuserError(prev => { return { ...prev, email: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, email:
                        "follow the format abc@gmail.com dce@yahoo.com"
                }
            });
        }
    };

    const validateAge = (e) => {

        let d = e.target.value;

        const birthDate = new Date(d)
        const today = new Date();


        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age >= 18 && age <= 120) {
            setuser(prev => { return { ...prev, age: age } });
            setuserError(prev => { return { ...prev, age: false } });
            setuserErrorMsg(prev => { return { ...prev, age: "" } });
        }
        else {
            setuserError(prev => { return { ...prev, age: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, age:
                        "age must be between 18-120"
                }
            });
        }
    };

    const validateCity = (e) => {
        let text = e.target.value;
        console.log(text)
        const regex = /^[A-Za-z]{3,}$/;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, city: text } });
            setuserError(prev => { return { ...prev, city: false } });
            setuserErrorMsg(prev => { return { ...prev, city: "" } });
        } else {
            setuserError(prev => { return { ...prev, city: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, city:
                        "follow the format abc@gmail.com dce@yahoo.com"
                }
            });
        }

    };

    const validateStreet = (e) => {
        let text = e.target.value;
        console.log(text)
        const regex = /^[A-Za-z]{3,}$/;

        if (regex.test(text)) {
            setuser(prev => { return { ...prev, street: text } });
            setuserError(prev => { return { ...prev, street: false } });
            setuserErrorMsg(prev => { return { ...prev, street: "" } });
        } else {
            setuserError(prev => { return { ...prev, street: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, street:
                        "text only"
                }
            });
        }

    }

    const validateNumber = (e) => {
        let num = Number(e.target.value);
        if (num > 0) {
            setuser(prev => { return { ...prev, number: num } });
            setuserError(prev => { return { ...prev, number: false } });
            setuserErrorMsg(prev => { return { ...prev, number: "" } });
        } else {
            setuserError(prev => { return { ...prev, number: true } });
            setuserErrorMsg(prev => {
                return {
                    ...prev, number:
                        "no negative numbers"
                }
            });
        }
    }

    const SendDetails = (e) => {
        console.log("btn");
        let validations = Object.values(userError);
        console.log(validations);
        if (validations.length == 11) {//all fields were checked
            if (validations.hasValue(false)) {
                console.log("btn1");
                <Alert severity="error">Fix your errors</Alert>
                return;
            }
            else {
               
            }
        }
        else{
            console.log("btn3");
            <Alert severity="warning">fill in all fields</Alert>
                return;
        }   
    }


    return (

        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '50ch' },
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
                        onBlur={validateuserName}
                        error={userError.username}
                        helperText={userErrorMsg.username}

                    />

                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        onBlur={validatePassword}
                        error={userError.password}
                        helperText={userErrorMsg.password}

                    />
                    <TextField
                        required
                        id="outlined-passwordv-input"
                        label="Validate Password"
                        type="password"
                        onBlur={validate2Password}
                        error={userError.passwordv}
                        helperText={userErrorMsg.passwordv}
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
                        onBlur={validatefirstName}
                        error={userError.firstname}
                        helperText={userErrorMsg.firstname}
                    />
                    <TextField
                        required
                        id="lastname-input"
                        label="Last Name"
                        type="text"
                        onBlur={validatelastName}
                        error={userError.lastname}
                        helperText={userErrorMsg.lastname}

                    />
                    <TextField
                        required
                        id="email-input"
                        label="Email"
                        type="text"
                        onBlur={validateEmail}
                        error={userError.email}
                        helperText={userErrorMsg.email}

                    />
                    <TextField
                        required
                        id="dateofbirth-input"
                        label="Date Of Birth"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onBlur={validateAge}
                        error={userError.age}
                        helperText={userErrorMsg.age}
                    />
                    <Autocomplete

                        options={options}
                        renderInput={(params) => (
                            <TextField
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                                {...params}
                                required
                                label="City"
                                variant="outlined"
                                onBlur={validateCity}
                                error={userError.city}
                                helperText={userErrorMsg.city}
                            />

                        )}
                    />
                    <TextField
                        required
                        id="streetname-input"
                        label="Street Name"
                        type="text"
                        onBlur={validateStreet}
                        error={userError.street}
                        helperText={userErrorMsg.street}
                    />
                    <TextField
                        required
                        id="number-input"
                        label="Number"
                        type="number"
                        onBlur={validateNumber}
                        error={userError.number}
                        helperText={userErrorMsg.number}

                    />
                    <br></br>
                    <br></br>
                </div>
                <Button variant="contained" onClick={SendDetails} endIcon={<SendIcon />}>
                    Register
                </Button>

            </Box>

        </>

    )
}
