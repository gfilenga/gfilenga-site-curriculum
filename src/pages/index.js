import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import { homeObjTwo2 } from '../components/InfoSection2/data';
import { homeObjOne, homeObjThree } from '../components/InfoSection/data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection2 {...homeObjTwo2} />
            <InfoSection {...homeObjThree}>
            </InfoSection>
        </>
    )
}

export default Home
