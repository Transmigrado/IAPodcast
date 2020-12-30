import '../../style.css'
import logo from '../../assets/ia_podcast_logo.png'
import React, { useState } from 'react'

const Header = () => {

    const [selectedIndex, setSelectedIndex ] = useState(0)

    const onClick = index => () => setSelectedIndex(index)

    const menu = ["Home","Podcasts","Nosotros", "Contacto"]

    return (
        <header class="header absolute" itemscope itemtype="http://schema.org/Organization">
            <div class="container">
                <h1 class="logo"><a href="#"><img itemprop="logo" src={logo} alt="Imperativo Altruista Podcast" width={200} title="Imperativo Altruista Podcast" /></a></h1>
                <nav class="navigation">
                    <ul class="menu">
                        {menu.map((e, index) =>  <li class={`menuitem ${(index === selectedIndex) ? 'active' : ''}`} onClick={onClick(index)}><a href="#">{e}</a></li>)}
                    </ul>
                    <a href="#" class="btn-hamburguer-menu"><i class="fa fa-bars"></i></a>
                </nav>
            </div>
        </header>
    )
}

export default Header