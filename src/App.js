import React from 'react'
import Navbar from './components/Navbar';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
import './index.css';
import Grid from './components/Grid';
 const App = () => {
    return (
        <div>
            <Router>
        
            <Navbar />
            <Grid />
            </Router>
           
        </div>
    )
}
export default App