import React, { Component } from 'react'

import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
 
    setProjects: (projects) =>
    dispatch({
      type: "SET_PROJECTS",
      payload: projects,
    })
});
 class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          projects: []
        
        };
      }
    
    render(){
        return(
           <h1>Projects</h1>
        )
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Projects)
  );
  