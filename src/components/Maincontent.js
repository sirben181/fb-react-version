
import React from 'react'
import Chatrooms from './Chatrooms'
import Inputcontent from './Inputcontent'
import Posts from './Posts'
import Statuses from './Statuses'

const Maincontent = () => {
    return (
        <div className="main-container">
            <div className="main-container-wrapper">
                 <Statuses />
                 <Inputcontent />
                 <Chatrooms />
                 <Posts />

            </div>
        </div>
    )
}

export default Maincontent
