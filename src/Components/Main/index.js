
import React from 'react'
import diego from '../../assets/diego.png'
import jorge from '../../assets/jorge.jpg'

const podcasters = [
    {
        name:'Diego Andrade',
        title: 'Traductor / Difusor Filosofico',
        description: 'Descripción',
        image: diego
    },
    {
        name:'Jorge Acosta',
        title: 'Desarrollador / Difusor Filosofico',
        description: 'Descripción',
        image: jorge
    },
    {
        name:'Samuel Álvarez',
        title: 'Músico / Difusor Filosofico',
        description: 'Descripción',
        image: diego
    }
]

const Main = () => {

    
    const Item = ({ name, title, description, image}) => (
        <div class="col-lg-4 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-12 mb-40">
            <div class="team-card">
                <figure class="team-card-image"><img src={image} alt="John Doe" title="John Doe" /></figure>
                <div class="team-card-content">
                    <h2 class="team-card-title">{name}</h2>
                    <p class="team-card-job">{title}</p>
                    <p class="team-card-description">{description}</p>
                    <ul class="team-card-social">
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-facebook"></i></a></li>
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-twitter"></i></a></li>
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-soundcloud"></i></a></li>
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                        <li class="social-item"><a href="#" target="_blank"><i class="fa fa-link"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )

    return (
        <main id="main" class="main">
			<section id="about-us" class="section-negative">
				<div class="container">
					<h2 class="title-default text-center">Detrás de los microfonos...</h2>
					<div class="row mb-30">
						{podcasters.map( item => <Item {...item} />)}
					</div>
				</div>
			</section>
		</main>
    )
}

export default Main