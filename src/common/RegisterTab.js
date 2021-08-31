import React, { useState } from 'react';
import './common.css';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/typography';


const RegisterTab = function (props) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [registered, setRegistered] = useState(false);

    const firstnameChangedHandler = function (e) {
        setFirstname(e.target.value);
    }

    const lastnameChangedHandler = function (e) {
        setLastname(e.target.value);
    }

    const emailChangedHandler = function (e) {
        setEmail(e.target.value);
    }

    const passwordChangedHandler = function (e) {
        setPassword(e.target.value);
    }

    const phoneChangedHandler = function (e) {
        setPhone(e.target.value);
    }

    function formSubmit() { }


    async function onFormSubmitted() {

        var details = {
            email_address: email,
            first_name: firstname,
            last_name: lastname,
            mobile_number: phone,
            password: password
        }


        try {
            const rawResponse = await fetch(props.baseUrl + "signup", {
                method: 'POST',
                body: JSON.stringify(details),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8"
                }
            });


            if (rawResponse.ok) {
                const response = await rawResponse.json();
                console.log(response);
                if (response.status === "ACTIVE") setRegistered(true);
            }


            else {
                const error = new Error();
                error.message = 'Registeration Unsuccessfull. Something went wrong.';
                throw error;
            }
        }


        catch (e) {
            alert(e.message);
        }

    }


    return (

        <div className="center paddedtop">


            <br /><br />

            <ValidatorForm className="subscriber-form center-field" onSubmit={formSubmit}>
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
                        className="center-field"
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
                        validators={['required', 'isEmail']}
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

                {
                    registered &&
                    <div><Typography>Registration Successful. Please Login!</Typography></div>

                }

                <br /><br />

                <div className='center'>

                    <Button variant="contained" color="primary" type="submit" onClick={onFormSubmitted}>
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