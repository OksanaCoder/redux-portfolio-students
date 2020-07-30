import React, { Component } from 'react'
import {Row, Col } from 'react-bootstrap'
import InstagramIcon from '@material-ui/icons/Instagram';
import ReactDOM from 'react-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";



const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setStudents: () => dispatch(fetchStudents()),
  toggleLoading: () => dispatch({
    type: 'TOGGLE_LOADING'
})
});

const fetchStudents = () => {
    return (dispatch, getState) => {
    fetch('http://localhost:3007/users/' + this.props.match.params.id)
    .then(result => result.json())
    
    .then(data => {
        console.log(data)
        return dispatch({type: "SET_STUDENTS", payload: data.users })
    })
 }
}
class Details  extends Component {



    // url = 'http://localhost:3001/users'
    
    
    // componentDidMount = async () => {
    // //    document.body.style={mainBag}
    //     const resp = await fetch('http://localhost:3000/users' + '/' + this.props.match.params.id) 
    //     const obj = await resp.json()
    //     this.setState({ student : obj})
    // }
   render() {
    // console.log(this.state.student)
   
    return(
        
        < >
    
            <div className='container mt-4'>
                <Row style={{marginTop: '200px'}}>
              {  this.props.students.data.map((item, i) =>
                    <Col lg={12} md={12} sm={12} style={{textAlign: 'center'}}>
                        <img style={{marginBottom: '20px', width: '100px', border: '3px solid #fff', borderRadius:'50%'}} src={item.img} />
                        <h5>I'm {item.name}</h5>
                        <h5>Live in {item.country}</h5>
                        <h5  className='mb-3'>Contact me on -> {item.email}</h5>
                        <LinkedInIcon color='secondary' className='mr-3'/>
                        <InstagramIcon color='primary' className='mr-3'/>
                        <FacebookIcon />
                    </Col>
              )}
                </Row>
            </div>
  
            </>
        )
   }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Details)
  );