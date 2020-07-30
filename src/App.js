import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Students from './components/Students'
import Projects from './components/Projects'
import Details from './components/Details'
import Home from './components/Home'
// import Spiner from './components/Spiner'

function App() {
  return (
    <div className="container">
    
     <Router>
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <Link to={'/home'} className="nav-link">Home</Link>  
              <Link to={'/students'} className="nav-link">Students</Link>  
              <Link to={'/projects'} className="nav-link">Projects</Link>  
        </div>
              <Route path='/home' exact component={Home} ></Route> 
              <Route exact path='/students'  exact component={Students} />
              <Route path='/projects' exact component={Projects} /> 
             <Route path='/details/:id' exact component={Details}/>}

            {/* { this.state.loading ? <LoadingSpinner /> :  <Route path='/details/:id' exact component={Details}/>} */}
           
   
    </Router>
   
    </div>
  );
}

export default App;
