import React, { useState } from 'react';
import './common.css';
import Button from '@material-ui/core/Button';
import { Link,useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/typography';

const onClickHandler = function () { }
const onFormSubmitted = function () { }


const RegisterTab = function () {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const history=useHistory();

    const firstnameChangedHandler = function (e){        
        setFirstname(e.target.value); 
    }

    const lastnameChangedHandler = function (e){        
        setLastname(e.target.value); 
    }

    const emailChangedHandler = function (e){        
        setEmail(e.target.value); 
    }
    
    const passwordChangedHandler = function (e){        
        setPassword(e.target.value); 
    }
    
    const phoneChangedHandler = function (e){        
        setPhone(e.target.value); 
    }

    return (

        <div className="center paddedtop">


            <br /><br />

            <ValidatorForm className="subscriber-form center-field" onSubmit={onFormSubmitted}>
                <div className="center-div">
                <TextValidator
                    id="firstname"
                    label="First Name *"
                    type="text"
                    name="firstname"
                    onChange={firstnameChangedHandler}
                    value={firstname}
                    validators={['required']}
                    errorMessages={['required']}
                    className = "center-field"
                >
                </TextValidator>
                </div>
                <br /><br />

                <div className="center-div">
                <TextValidator
                    id="lastname"
                    label="Last Name *"
                    type="text"
                    name="lastname"
                    onChange={lastnameChangedHandler}
                    value={lastname}
                    validators={['required']}
                    errorMessages={['required']}
                >
                </TextValidator>
                </div>
                <br /><br />

                <div className="center-div">
                <TextValidator
                    id="email"
                    label="Email *"
                    type="text"
                    name="email"
                    onChange={emailChangedHandler}
                    value={email}
                    validators={['required']}
                    errorMessages={['required']}
                >
                </TextValidator>
                </div>
                <br /><br />

                <div className="center-div">
                <TextValidator
                    id="password"
                    type="text"
                    name="password"
                    onChange={passwordChangedHandler}
                    label="Password *"
                    value={password}
                    validators={['required']}
                    errorMessages={['required']}
                ></TextValidator>
                </div>
                <br /><br />

                <div className="center-div">
                <TextValidator
                    id="phone"
                    label="Contact No. *"
                    type="text"
                    name="phone"
                    onChange={phoneChangedHandler}
                    value={phone}
                    validators={['required']}
                    errorMessages={['required']}
                >
                </TextValidator>
                </div>
                <br /><br />
                
                {<div><Typography>Registration Successful. Please Login!</Typography></div>}
                <br /><br /> 
                 
                <div className = 'center'>
                   
                <Button variant="contained" color="primary" type="submit">
                    Register
                </Button>
                <br /><br />
                </div>
            </ValidatorForm>
            <br /><br />
        </div>
    )
}

export default RegisterTab;