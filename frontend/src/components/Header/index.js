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
    },
    img: {
        marginTop: 70
    }
}));

const Header = (props) => {
    const {
    logo,

    } = props.classes;
    const classes = useStyles();

    return (
            <Fragment>
                <div className={classes.root}>
                <img  className={classes.img} src={Logo} alt=""/>
                <br/>
                    <NavLink to="/pro">
                        Projects
                    </NavLink>
                    <a href="https://www.google.com"> About us</a> .
                    <a href="https://www.google.com"> Contact us</a>
                </div>

                {/*<div className={logo}>*/}
                {/*    <Image*/}
                {/*        src={Logo}*/}
                {/*        width='100px'*/}
                {/*        disableSpinner*/}
                {/*    />*/}
                {/*</div>*/}
            </Fragment>
        );
}

export default withStyles(styles)(Header);