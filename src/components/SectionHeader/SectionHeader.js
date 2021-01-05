import React from 'react'
import './SectionHeader.css'

const SectionHeader = ({children, backgroundImageUrl}) => {
    return (
        <div className='section-header' style={{backgroundImage:''}}>
            {children}
        </div>
    )
}

export default SectionHeader
