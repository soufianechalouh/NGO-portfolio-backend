import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { withStyles } from '@material-ui/styles';
import Carousel from 'react-bootstrap/Carousel'


import styles from './styles.js';

import { colors } from '@material-ui/core';
import { green, grey, red } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';




const useStyles = makeStyles((theme) => ({
   root: {
        flexGrow: 1,
       
    },
    img: {
        width: 150,
      marginLeft:40,
        //marginBottom: 30
    },
    a: {
        textDecoration:'none',
        color: '#c9b0bd',
        fontFamily: 'Helvetica',
        margin: '5px',
        fontWeight: 700,
        fontSize: 15,
        marginLeft:'15px'

    },

   /* Nav: {
        justifyContent : 'FLEX-START',
        backgroundColor : grey

    }*/

    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
        marginLeft:30
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#f1eaee',
        '&:hover': {
          backgroundColor: ' #f1eaee',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      
      ligne_verticale: {
        width:'5px',
       borderleft:'1px solid gray',
        height:'70%'
       },

      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#c9b0bd',
      },
      
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },



}));


const Header = (props) => {
    const {
    logo,
    a
    } = props.classes;
    const classes = useStyles();
    const blue = indigo[300];
    const purple = deepPurple[100];
    const insta = pink[900];
    

    return (
           
             <div className={classes.root} >
                <AppBar position="static"  color="transparent" >
        <Toolbar style={{ fontSize: 0.5  }}>
        <img  className={classes.img} src={Logo} alt=""/>
        	<div className={classes.ligne_verticale} ></div>
          <Typography className={classes.title} style={{marginLeft:"60px"}} >
            
              <NavLink to="/" className={classes.a} style={{marginLeft:"30px"}} variant="h6"  >
              Acceuil
              <Badge   color="secondary">
                <ArrowForwardIosIcon style={{fontSize: 10}} />
              </Badge>
          
                       
                </NavLink>
               
                <NavLink to="/1" className={classes.a} variant="h6"  >
                Projets
                <Badge   color="secondary">
                <ArrowForwardIosIcon style={{fontSize: 10}} />
              </Badge>
                       
                </NavLink>


                <a className={classes.a} href="https://www.google.com" variant="h6"  > 
                A Propos 
                <Badge   color="secondary">
                <ArrowForwardIosIcon style={{fontSize: 10}} />
              </Badge>
                </a>
                <a className={classes.a} href="https://www.google.com" variant="h6" >
                   Contact 
                   <Badge   color="secondary">
                <ArrowForwardIosIcon style={{fontSize: 10}} />
              </Badge>
              </a>
          </Typography>
          <IconButton  color="inherit">
              <Badge >
                <FacebookIcon  color="action" />
              </Badge>
          </IconButton>
          <IconButton  color="inherit">
              <Badge >
                <InstagramIcon  color="action"/>
              </Badge>
          </IconButton>
          <IconButton  color="inherit">
              <Badge  >
                <MailOutlineIcon color="action"  />
              </Badge>
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              style={{color: "#483D8B" }}
            />
          </div>
        </Toolbar>
      </AppBar>

   
                </div>

            

        );
}

export default withStyles(styles)(Header);