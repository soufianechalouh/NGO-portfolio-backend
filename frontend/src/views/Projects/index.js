import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {connect} from "react-redux";
import {getProjects} from "../../actions/projects"
import styles from './styles';


import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/styles";


export class ProjectsGrid extends Component{
    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render() {

        const {
          root,
          control,
          project,
          description,
          centered,
          img,
        } = this.props.classes;
        return (
            // <div className={classes.root}>
            <div>
                <Grid item xs={12}>

                    <Grid container justify="center">
                        <Grid item md={6}>
                            <Card  className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/77410369_2399736020339166_4673256178501812224_o.jpg"
                                     alt=""/>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/17308754_1307772549283244_3687166335795436735_n.jpg"
                                     alt=""/>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/32150010_431713200609901_1379425096111751168_n.jpg"
                                     alt=""/>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/78482454_486020682010629_1984186062238384128_o.jpg"
                                     alt=""/>
                            </Card>
                        </Grid>
                        {/*{[0, 1, 2, 3].map((value) => (*/}
                        {/*    <Grid*/}
                        {/*        key={value}*/}
                        {/*        item md={6}*/}
                        {/*        color={background}*/}
                        {/*    >*/}
                        {/*        <Card className={classes.project} variant="outlined">*/}
                        {/*            <img className={classes.img}*/}
                        {/*                 src="https://s3-img.pixpa.com/com/large/20669/1558470795-579679-6ms2.jpg"*/}
                        {/*                 alt=""/>*/}
                        {/*            <div className={classes.description}>*/}
                        {/*                <span className={classes.centered}>TestText</span>*/}
                        {/*            </div>*/}
                        {/*        </Card>*/}
                        {/*    </Grid>*/}
                        {/*))}*/}
                        <Grid item md={6}>
                            <Card className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/77410369_2399736020339166_4673256178501812224_o.jpg"
                                     alt=""/>
                            </Card>
                        </Grid>
                        <Grid item md={6}>
                            <Card className={project} variant="outlined">
                                <img className={img}
                                     src="./media/thumbnails/24785038_1725035647536086_2375177550733934884_o.jpg"
                                     alt=""/>
                                     <div className={description}>
                                        <span >TestText</span>
                                    </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    projects: state.projects.projects
})

export default connect(mapStateToProps, {getProjects})(withStyles(styles)(ProjectsGrid));
// export default ProjectsGrid;