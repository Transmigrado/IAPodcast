import '../../style.css'
import React from 'react'
import amaze from '../../assets/animals_that_amaze.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

const Cover = () => {
    return (
        <section class="podcast-hero" style={{ backgroundImage: `url(${amaze})` }}>
			<div class="podcast-hero-inner">
				<div class="container">
						<div class="podcast-hero-content">
						<span class="podcast-hero-date">Diciembre</span>
						<h2 class="podcast-hero-title"><a href="podcast.html">Episodio #00 - Titulo!</a></h2>
						<ul class="podcast-hero-meta">
							<li class="item"><a href="#" class="podcast-hero-tag" rel="tag">Etica</a></li>
							<li class="item"><i class="fa fa-clock-o"></i> 45 mins.</li>
							<li class="item"><a href="#" class="podcast-hero-download"><i class="fa fa-download"></i> Download</a></li>
						</ul>
					</div>
				</div>
				
				<div class="podcast-hero-player-content">
					<div class="container">
					
						<p>Hola</p>
					</div>
				</div>
				
			</div>
		</section>
    )
}

export default Cover