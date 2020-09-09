import React, { useState } from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 10,
    // },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1200,
    },
    control: {
        padding: theme.spacing(2),
    },
    project: {
        height:450,
        margin:10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        color: 'black',
        '&:hover $img': {
            opacity: 0.5
        },
        '&:hover $description': {
            opacity: 1
        }


    },
    description: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
    },
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    },
    img: {
        flexShrink: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */



const ProjectsGrid = (props) =>{
    const tileData = [
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 2
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 1
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 2
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 2
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 2
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 1
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 2
    },
    {
        img: "https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg",
        title: 'Solidarity forever',
        author: 'Best selling author',
        cols: 3
    }
    ]

    const [background, setBackground] = useState("#FFFFFF")

    const [spacing, setSpacing] = React.useState(5);

    const classes = useStyles();

    // const tileData = [0,1,2,3]

    const setStyle = (background) =>{
        setBackground(background)
    }

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    return(
        <div className={classes.root}>
            {/*<GridList cellHeight={470} className={classes.gridList} cols={3}>*/}
            {/*  {tileData.map((tile) => (*/}
            {/*    <GridListTile key={tile.img} cols={tile.cols || 1}>*/}
            {/*      <img src={tile.img} alt={tile.title} />*/}
            {/*    </GridListTile>*/}
            {/*  ))}*/}
            {/*</GridList>*/}

            <Grid item xs={12}>
                <Grid container justify="center" >
                    {[0, 1, 2, 3].map((value) => (
                        <Grid
                            key={value}
                            item md={6}
                            color={background}
                        >
                            <Card className={classes.project} variant="outlined" >
                                <img className={classes.img} src="https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg" alt=""/>
                                <div className={classes.description}>
                                    <span className={classes.centered}>TestText</span>
                                </div>
                            </Card>
                        </Grid>
                    ))}
                    <Grid item md={6} >
                        <Card className={classes.project} variant="outlined">
                            <img className={classes.img} src="https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg" alt=""/>
                        </Card>
                    </Grid>
                    <Grid  item md={6} >
                        <Card className={classes.project} variant="outlined">
                            <img className={classes.img} src="https://ctl.s6img.com/society6/img/YEbTK_x9JAHs5QxYhRCjuGmy0CU/w_700/tshirts/men/greybg/white/~artwork,bg_FFFFFFFF,fw_3300,fh_5100,iw_3300,ih_5100/s6-0025/a/9910172_14498622/~~/random-square-tshirts.jpg" alt=""/>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default ProjectsGrid;