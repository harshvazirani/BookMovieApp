import React, { useState } from 'react';
import './common.css';
import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const onClickHandler = function () { }
const onFormSubmitted = function () { }


const LoginTab = function () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history=useHistory();

    const usernameChangedHandler = function (e){        
        setUsername(e.target.value); 
    }

    const passwordChangedHandler = function (e){        
        setPassword(e.target.value); 
    }

    return (

        <div className="center paddedtop">


            <br /><br />

            <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>

                <TextValidator
                    id="username"
                    label="Username *"
                    type="text"
                    name="username"
                    onChange={usernameChangedHandler}
                    value={username}
                    validators={['required']}
                    errorMessages={['Username cannot be empty']}
                >
                </TextValidator>

                <br /><br />

                <TextValidator
                    id="password"
                    type="text"
                    name="password"
                    onChange={passwordChangedHandler}
                    label="Password *"
                    value={password}
                    validators={['required']}
                    errorMessages={['Password cannot be empty']}
                ></TextValidator>
                
                <br /><br />

                <div className='center'>
                <Button variant="contained" color="primary" type="submit" >
                    LOGIN
                </Button>
                <br /><br />
                </div>
            </ValidatorForm>
            <br /><br />
        </div>
    )
}

export default LoginTab;