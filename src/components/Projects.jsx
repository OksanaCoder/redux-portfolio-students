import React, { Component } from 'react'
import Spiner from './Spiner'
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
 
    setProjects: (projects) =>
    dispatch({
      type: "SET_PROJECTS",
      payload: projects,
    }),

    toggleLoading: () => dispatch({
        type: 'TOGGLE_LOADING'
    })
});

 class Projects extends Component {
   
   
    render(){
        return(
               this.props.projects.loading ? <Spiner /> : (<h1>Projects</h1>)
        )
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Projects)
  );
  