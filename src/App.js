import React from 'react'
import Navbar from './components/Navbar';
import {Link,BrowserRouter as Router,Route} from 'react-router-dom'
import './index.css';
 const App = () => {
    return (
        <div>
            <Router>
        
            <Navbar />
            </Router>
           
        </div>
    )
}
export default App