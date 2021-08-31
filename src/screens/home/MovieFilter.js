import React, { useState } from 'react';
import '../../common/common.css';
import { makeStyles } from '@material-ui/core/styles/';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { InputLabel, Input, Checkbox } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const dummyartists = [
    {
        firstname: 'Christopher',
        lastname: 'Nolan'
    },
    {
        firstname: 'Leonardo',
        lastname: 'Di Caprio'
    },
    {
        firstname: 'Joseph',
        lastname: 'Gordon-Levitt'
    },
    {
        firstname: 'Tom',
        lastname: 'Hardy'
    },
];

const dummygenres = ['Horror', 'Comedy', 'Romance', 'Drama'];

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.light
    },
    component: {
        margin: theme.spacing(1),
        maxWidth: 240,
        minWidth: 240
    }
}));


// This is the Material UI Card Component that is used to filter the Movies.
export default function MovieFilter(props) {
    const [genres, ] = useState(dummygenres);
    const [artists, ] = useState(dummyartists);
    const classes = useStyles();

    return (
        <div className="center">
            <Card>
                <CardContent>
                    <Typography className={classes.heading}>FIND MOVIES BY:</Typography>
                    <div>
                        <FormControl className={classes.component}>
                            <InputLabel id="genres">Movie Name</InputLabel>
                            <Input id="standard-basic" />
                        </FormControl>
                    </div>
                    <div>
                        <Autocomplete
                            multiple
                            id="genres"
                            className={classes.component}
                            options={genres}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option}
                                </React.Fragment>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard" label="Genres" placeholder="Genres" />
                            )}
                        />
                    </div>

                    <div>
                        <Autocomplete
                            multiple
                            id="artists"
                            className={classes.component}
                            options={artists}
                            disableCloseOnSelect
                            getOptionLabel={(option) => (option.firstname + " " + option.lastname)}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {`${option.firstname} ${option.lastname}`}
                                </React.Fragment>
                            )}
                            style={{ width: 500 }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard" label="Artists" placeholder="Artists" />
                            )}
                        />
                    </div>

                    <div>
                        <FormControl className={classes.component} noValidate>
                            <TextField
                                id="date"
                                label="Release Date Start"
                                type="date"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.component} noValidate>
                            <TextField
                                id="date"
                                label="Release Date End"
                                type="date"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                    </div>
                </CardContent>
                <CardActions>
                    <div className='center'>
                        <Button variant="contained" color="primary" type="submit" className={classes.component}>
                            APPLY
                        </Button>
                        <br /><br />
                    </div>
                </CardActions>
            </Card>
        </div>


    );
}
