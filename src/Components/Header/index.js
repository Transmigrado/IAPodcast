
import logo from '../../assets/ia_podcast_logo.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const menu = [
    {
        label: 'Home',
        link:'/'
    },
    {
        label: 'Transcripciones',
        link:'/transcription'
    },
    {
        label: 'Nosotros',
        link:'/about'
    }
]

const Header = () => {

    const [selectedIndex, setSelectedIndex ] = useState(0)
    const [display, setDisplay] = useState('none')
    
    const onClick = index => () => {
        setDisplay('none')
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
                        {menu.map((e, index) =>  (
                            <Link to={e.link}>
                                <li key={`header_key_${index}`} className={`menuitem ${(index === selectedIndex) ? 'active' : ''}`} onClick={onClick(index)}><a href="#">{e.label}</a></li>
                            </Link>
                            
                        ))}
                    </ul>
                    <a href='#' className='btn-hamburguer-menu' onClick={onMenuClick}><i className='fa fa-bars'></i></a>
                </nav>
            </div>
        </header>
    )
}

export default Header