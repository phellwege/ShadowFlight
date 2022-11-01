import React, { useEffect, useRef } from "react";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import NavBar from '../components/NavBar';
import Header from '../components/Head';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import About from '../components/About';
import '../Main.css'
import '../App.css'

export default () => {
    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    };
    return (
        <div id="background">
            <NavBar />
            <Header />
            <Fullpage>
                <FullpageNavigation/>
                <FullPageSections>
                    <FullpageSection style={{SectionStyle}} className='fullpage1'>
                        <About />
                    </FullpageSection>
                    <FullpageSection style={{SectionStyle}} className='fullpage2'>
                        <Contact />
                        <Footer />
                    </FullpageSection>
                </FullPageSections>
            </Fullpage>
        </div>
    )
}
