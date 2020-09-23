import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


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

        return(
            <div>
                Project detail {this.state.projectDetails.name}
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        projects: state.projects.projects
    }
)

export default connect(mapStateToProps)(ProjectDetails);
