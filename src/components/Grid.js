import React from 'react'
import '../index.css'
import LeftSideBar from './LeftSideBar'
import Maincontent from './Maincontent'
import RightSideBar from './RightSideBar'



const Grid = () => {
    return (
        <div className="wrapper">
            <div className="content-container">
                <LeftSideBar />
                <Maincontent />
                <RightSideBar />

            </div>
            
        </div>
    )
}

export default Grid
