
import logo from '../../assets/ia_podcast_logo.png'
import React, { useState } from 'react'

const menu = ['Home','Transcripciones','Nosotros']

const Header = ({ onMenu }) => {

    const [selectedIndex, setSelectedIndex ] = useState(0)
    const [display, setDisplay] = useState('none')
    
    const onClick = index => () => {
        setDisplay('none')
        onMenu(index)
        setSelectedIndex(index)
    }

    const onMenuClick = () => {
        setDisplay((display === 'none') ? 'block' : 'none')
    }

    return (
        <header className='header absolute' >
            <div className='container'>
                <h1 className='logo'><a href="#"><img src={logo} alt="Imperativo Altruista Podcast" width={200} title="Imperativo Altruista Podcast" /></a></h1>
                <nav className='navigation'>
                    <ul className='menu' style={{display}}>
                        {menu.map((e, index) =>  <li key={`header_key_${index}`} className={`menuitem ${(index === selectedIndex) ? 'active' : ''}`} onClick={onClick(index)}><a href="#">{e}</a></li>)}
                    </ul>
                    <a href='#' className='btn-hamburguer-menu' onClick={onMenuClick}><i className='fa fa-bars'></i></a>
                </nav>
            </div>
        </header>
    )
}

export default Header