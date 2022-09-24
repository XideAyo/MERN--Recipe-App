import React, {useState} from 'react'
import About from '../component/About/About'
import Contact from '../component/Contact/Contact'
import Jumbotron from '../component/Jumbotron/Jumbotron'
import MemberCard from '../component/MemberCard/MemberCard'
import Service from '../component/Services/Service'
import Header from '../component/Header/Header'
import SideBar from '../component/SideBar/SideBar.'

const LandingPage = () => {

    
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

    return (
        <div>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
            <Jumbotron />
            <About />
            <Service />
            <MemberCard />
            <Contact />
        </div>
    )
}

export default LandingPage
