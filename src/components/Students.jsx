import React, { Component } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";
import { connect } from "react-redux";
import Spiner from './Spiner'


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setStudents: () => dispatch(fetchStudents()),
  toggleLoading: () => dispatch({
    type: 'TOGGLE_LOADING'
})
});

const fetchStudents = () => {
    return (dispatch, getState) => {
    fetch('http://localhost:3007/users')
    .then(result => result.json())
    
    .then(data => {
        console.log(data)
        return dispatch({type: "SET_STUDENTS", payload: data.users })
    })
 }
}

 class Students extends Component {

    state = {
        result: []
    }
    componentDidMount = () => {
  
  this.props.setStudents()
    }

    openProject  = async (id) => {
        const resp = await fetch('http://localhost:3000/users/' + id )
        const result =  await resp.json()
        //console.log(result)
        this.setState({
          projects : result,
          
        })
        console.log(result)
      
      }
    // constructor(props) {
    //     super(props);
    //     this.state = {
          
    //       students: []
        
    //     };
    //   }
    
 
    render(){
        console.log(this.props.students)
        return (
            <>
        
           <Row>  
         {this.props.students.loading ? <Spiner /> : (
          
          this.props.students.data.map((item, i) => {
               return(
                <Card className='col-sm-6 col-md-2 col-lg-2 card-portf' style={{width: '10%'}}>

                <Link to={'/details/' + item._id} ><Card.Img variant="top" className='imgs' src={item.img} onClick={() => this.openProject(item._id)}/></Link>
                 
                  <Card.Body>
                    <Card.Title style={{fontStyle:'italic'}}>{item.name} {item.surname}</Card.Title>
                   <Button variant='danger' style={{fontSize: '12px'}} onClick={() => this.delItem(item._id)}>Remove</Button>
                   <Button variant='success' style={{fontSize: '12px'}} onClick={() => this.openAndEdit(item._id)}>Edit</Button>
                   <Link to={'/projects'} ><Button variant='dark' style={{fontSize: '12px'}}>Projects</Button></Link>

                  </Card.Body>
                  </Card>
                  
               )
           }
           )
        
          
           


)}  
 </Row>

           </>
           
        )
        
    }
}



export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Students)
  );
  