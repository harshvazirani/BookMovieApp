import React from 'react';
import './common.css';
import Modal from 'react-modal';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginTab from './LoginTab.js';
import RegisterTab from './RegisterTab';
import { Link } from 'react-router-dom';

const customStyles = {};

Modal.setAppElement('#root');


const Header = function (props) {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedTab, setTab] = React.useState(0);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleChange = (event, newTab) => {
        setTab(newTab);
    };


    async function login(username, password) {
        const param = window.btoa(`${username}:${password}`);
        try {
            const rawResponse = await fetch(props.baseUrl + "auth/login", {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                    authorization: `Basic ${param}`
                }
            });

            const result = await rawResponse.json();

            if (rawResponse.ok) {
                window.sessionStorage.setItem('user-details', JSON.stringify(result));
                window.sessionStorage.setItem('access-token', rawResponse.headers.get('access-token'));
                props.setLoggedIn(true);
                closeModal();
            }

            else {
                const error = new Error();
                error.message = result.message || 'Something went wrong.';
            }
        }

        catch (e) {
            alert(`Error: ${e.message}`);
        }
    }


    async function logout() {

        try {
            const accessToken = window.sessionStorage.getItem('access-token');
            const rawResponse = await fetch(props.baseUrl + "auth/logout", {
                method: 'POST',
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/json;charset=UTF-8",
                    authorization: `Bearer ${accessToken}`
                }
            });

            if (rawResponse.ok) {
                props.setLoggedIn(false);
                window.location = "http://localhost:3000/";
            }

            else {
                const error = new Error();
                error.message = 'Something went wrong.';
            }
        }

        catch (e) {
            alert(`Error: ${e.message}`);
        }
    }

    return (
        <div>
            <div className="header">
                <img className="logo" src={require('../assets/logo.svg')} alt='logo' />

                {
                    <div>
                        {!props.loggedIn &&
                            <Button variant="contained" color="default" className="button" onClick={openModal}>
                                LOGIN
                            </Button>}

                        {props.loggedIn &&
                            <Button variant="contained" color="default" className="button" onClick={logout}>
                                LOGOUT
                            </Button>}
                    </div>

                }

                {props.showBookMovieButton &&
                    <div className="button">
                        {
                            props.loggedIn &&
                            <Link to="/bookshow/:id">
                                <Button variant="contained" color="primary">
                                    BOOK SHOW
                                </Button>
                            </Link>}

                        {
                            !props.loggedIn &&
                            <Button variant="contained" color="primary" onClick={openModal}>
                                BOOK SHOW
                            </Button>
                        }

                    </div>
                }


            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                className="modal-width"
            >
                <Paper>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        centered
                    >
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>

                    {selectedTab === 0 && <LoginTab baseUrl={props.baseUrl} onClickHandler={login} />}

                    {selectedTab === 1 && <RegisterTab baseUrl={props.baseUrl} />}

                </Paper>
            </Modal>


        </div>
    )
}

export default Header;