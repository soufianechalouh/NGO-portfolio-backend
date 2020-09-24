import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {connect} from "react-redux";
import {getProjects} from "../../actions/projects"
import styles from './styles';


import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";


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
          project_class,
          project_link,
          description,
          centered,
          img,
        } = this.props.classes;
        return (
            // <div className={classes.root}>
            <div>
                <Grid item xs={12}>

                    <Grid container justify="center">
                        {this.props.projects.map(project => (

                            // <NavLink to={"/"+project.id}>
                                <Grid item md={6}>
                                    <Card  className={project_class} variant="outlined">
                                        <Link to={"/"+project.id} className={project_link}>
                                            <img className={img}
                                                 src={project.thumbnail}
                                                 alt=""/>
                                             <div className={description}>
                                                <span className={centered} >{project.name}</span>
                                            </div>
                                        </Link>
                                    </Card>
                                </Grid>
                            // </NavLink>
                        ))}
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