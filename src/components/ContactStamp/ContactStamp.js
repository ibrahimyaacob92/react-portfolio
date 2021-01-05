import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiTwotoneMail, AiFillFilePdf} from 'react-icons/ai'
import './ContactStamp.css'

const ContactStamp = ({github, linkedIn, email, cv}) => {
  return (
    <div className='contact-stamp'>
      <a href={github}><AiFillGithub/></a>
      <a href={linkedIn}><AiFillLinkedin/></a>
      <a href={email}><AiTwotoneMail/></a>
      <a href={cv}><AiFillFilePdf/></a>
    </div>
  )
}

export default ContactStamp
