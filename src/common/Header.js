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
    const [loggedIn, setLoggedIn] = React.useState(false);
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


    return (
        <div>
            <div className="header">
                <img className="logo" src={require('../assets/logo.svg')} alt='logo' />


                <Button variant="contained" color="default" className="button" onClick={openModal}>
                    LOGIN
                </Button>


                {   props.showBookMovieButton &&
                    <div className="button">
                        {
                            loggedIn &&
                            <Link to="/bookshow/:id">
                                <Button variant="contained" color="primary">
                                    BOOK SHOW
                                </Button>
                            </Link>}

                        {
                            !loggedIn &&
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

                    {selectedTab === 0 && <LoginTab />}

                    {selectedTab === 1 && <RegisterTab />}

                </Paper>
            </Modal>


        </div>
    )
}

export default Header;