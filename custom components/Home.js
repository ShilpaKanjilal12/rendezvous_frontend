import React from 'react'
import ParallaxBg from './ParallaxBg'
import Mainbody from './Mainbody'
import Appointment from './Appointment'

const Home = () => {
    return (
        <>
            <ParallaxBg />
            <Mainbody />
            <div id="appointment"><Appointment /></div>
        </>
    )
}

export default Home