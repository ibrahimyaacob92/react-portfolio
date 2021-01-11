import React from 'react'
import './Footer.css'

const Footer = ({children}) => {
    return (
        <div className='footer'>
            <hr/>
            {children}
        </div>
    )
}

export default Footer
