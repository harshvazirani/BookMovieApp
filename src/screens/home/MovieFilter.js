import React from 'react';
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

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const useStyles = makeStyles((theme) => ({
    heading: {
        color: theme.palette.primary.light
    },
    component: {
        margin: theme.spacing.unit,
        maxWidth: 240,
        minWidth: 240
    }
}));

export default function MovieFilter() {

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
                            options={currencies}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.value}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.value}
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
                            options={currencies}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.value}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.value}
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
                                defaultValue="yyyy-MM-dd"
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
                                defaultValue="yyyy-MM-dd"
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
