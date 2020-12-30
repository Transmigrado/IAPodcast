import '../../style.css'
import logo from '../../assets/ia_podcast_logo.png'

const Header = () => {
    return (
        <header class="header absolute" itemscope itemtype="http://schema.org/Organization">
            <div class="container">
                <h1 class="logo"><a href="index.html"><img itemprop="logo" src={logo} alt="Imperativo Altruista Podcast" width={163} title="Imperativo Altruista Podcast" /></a></h1>
                <nav class="navigation">
                    <ul class="menu">
                        <li class="menuitem active"><a href="index.html">Home</a></li>
                        <li class="menuitem"><a href="#">Podcasts</a></li>
                        <li class="menuitem"><a href="#">Nosotros</a></li>
                        <li class="menuitem"><a href="#">Contacto</a></li>
                    </ul>
                    <a href="#" class="btn-hamburguer-menu"><i class="fa fa-bars"></i></a>
                </nav>
            </div>
        </header>
    )
}

export default Header