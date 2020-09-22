import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";


export class ProjectDetails extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired
    }

    render() {
        return(
            <div>
                Project detail
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
