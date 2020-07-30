import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";



const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setStudents: (students) => dispatch(fetchStudents(students)),
  toggleLoading: () => dispatch({
    type: 'TOGGLE_LOADING'
})
});

const fetchStudents = (students) => {
    return (dispatch, getState) => {
    const data = fetch('http://localhost:3005/users')
    .then(result => result.json())
    .then(data => data)
    return dispatch({
        type: "SET_STUDENTS",
        payload: data
    })
}
}

 class Students extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
          
    //       students: []
        
    //     };
    //   }
    
 
    render(){
        return (
            <>
           <h1>Students</h1>
   
           {this.props.students.data.map((item, i) => {
               return(
                <Card className='col-sm-12 col-md-2 col-lg-2 card-portf' style={{width: '10%'}}>

                <Link to={'/details/' + item._id} ><Card.Img variant="top" className='imgs' src={item.img} onClick={() => this.openProject(item._id)}/></Link>
                 
                  <Card.Body>
                    <Card.Title style={{fontStyle:'italic'}}>{item.name} {item.surname}</Card.Title>
                   <Button variant='danger' onClick={() => this.delItem(item._id)}>Remove</Button>
                   <Button variant='success' onClick={() => this.openAndEdit(item._id)}>Edit</Button>
                  </Card.Body>
                  </Card>
                  
               )
           }
           )
           }

           </>
           
        )
        
    }
}



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Students)
  );
  