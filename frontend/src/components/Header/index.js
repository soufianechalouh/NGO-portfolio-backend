import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { withStyles } from '@material-ui/styles';

import styles from './styles.js';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 10,
        height: 250,
        textAlign: 'center'
    },
    img: {
        width: 350,
        marginTop: 40,
        marginBottom: 30
    },
    a: {
        textDecoration:'none',
        color: 'black',
        fontFamily: 'Helvetica',
        margin: '5px',
        fontWeight: 500

    }
}));

const Header = (props) => {
    const {
    logo,
    a
    } = props.classes;
    const classes = useStyles();

    return (
            <Fragment>
                <div className={classes.root}>
                <img  className={classes.img} src={Logo} alt=""/>
                <br/>
                    <NavLink to="/pro" className={classes.a} style={{fontWeight: 600}}>
                        Projects
                    </NavLink>
                    <a className={classes.a} href="https://www.google.com" > Who are we</a>
                    <a className={classes.a} href="https://www.google.com"> Contact us</a>
                </div>

            </Fragment>
        );
}

export default withStyles(styles)(Header);