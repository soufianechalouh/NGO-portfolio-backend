import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import styles from "./styles";

import {withStyles} from "@material-ui/styles";

export class ProjectDetails extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired
    }
    componentWillMount() {
        console.log(this.props.projects)
        console.log(this.props.projects[0])
        console.log(this.props.projects[0].name)
        console.log(this.props.projects[0]['id'])
        console.log(this.props.match.params.id)

        let project = this.props.projects.filter(project => project['id'].toString() === this.props.match.params.id)[0];
        console.log(project)
        this.setState(
            {
              projectDetails: project
            }
        );
    }
    render() {
        const {
          container,
          project_title,
          project_description,
        } = this.props.classes;

        return(
            <div className={container}>
                <h1 className={project_title}>
                {this.state.projectDetails.name}
                </h1>
                <div className={project_description} dangerouslySetInnerHTML={{ __html: this.state.projectDetails.description }} >

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        projects: state.projects.projects
    }
)

export default connect(mapStateToProps)(withStyles(styles)(ProjectDetails));
