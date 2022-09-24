import React from 'react'
import { Link } from 'react-router-dom'

const MemberCard = () => {

    const image = require('../../image/Together-pana.png')
    return (
        <div className='member-flex'>
            <div className='member-text'>
                <h1>Become a Member at Nutrix today</h1>
                <h3> Why become a member of Nutrix ?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt debitis vel voluptatibus quia numquam suscipit error eaque autem! Nobis voluptates libero quaerat placeat unde itaque dolor maxime ratione corrupti iure.</p>
                <Link to="/" className='button'>Become a Member</Link>
            </div>
            <div className='jumbotron-img'>
                <img src={image} alt="" className='member-image'/>
            </div>
        </div>
    )
}

export default MemberCard
