
import logo from '../../assets/ia_podcast_logo.png'
import React, { useState } from 'react'

const Header = () => {

    const [selectedIndex, setSelectedIndex ] = useState(0)

    const onClick = index => () => setSelectedIndex(index)

    const onMenuClick = () => {

    }

    const menu = ['Home','Episodios','Nosotros']

    return (
        <header className='header absolute' >
            <div className='container'>
                <h1 className='logo'><a href="#"><img src={logo} alt="Imperativo Altruista Podcast" width={200} title="Imperativo Altruista Podcast" /></a></h1>
                <nav className='navigation'>
                    <ul className='menu'>
                        {menu.map((e, index) =>  <li key={`header_key_${index}`} className={`menuitem ${(index === selectedIndex) ? 'active' : ''}`} onClick={onClick(index)}><a href="#">{e}</a></li>)}
                    </ul>
                    <a href='#' className='btn-hamburguer-menu'><i className='fa fa-bars'></i></a>
                </nav>
            </div>
        </header>
    )
}

export default Header