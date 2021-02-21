import React from 'react'
import logo from '../../assets/ia_podcast_logo_white.png'

const Footer = ({onMenu}) => {
    return (
        <footer class="footer">
			
		
			<section class="section-positive">
				<div class="container">
					
					<div class="row mt-70 mb-30">
						
			
						<div class="col-sm-3 mb-40">
							<h2 class="title-separator white">Sitemap</h2>
							<ul class="footer-list">
								<li><a href="#" onClick={() => onMenu(0)}>Home</a></li>
								<li><a href="#" onClick={() => onMenu(1)}>Nosotros</a></li>
							</ul>
						</div>
					
						<div class="col-sm-3 mb-40">
							<h2 class="title-separator white">Buscanos</h2>
							<ul class="social-list">
								<li class="social-item"><a href="https://www.facebook.com/ImperativoAltruista" target="_blank"><i class="fa fa-facebook"></i></a></li>
								<li class="social-item"><a href="https://www.instagram.com/imperativoaltruista/" target="_blank"><i class="fa fa-instagram"></i></a></li>
							</ul>
						</div>
						
					</div>
					
				</div>
			</section>
			
			
			<section class="footer-credits">
				<div class="container">
					
					<div class="row">
						
					
						<div class="col-sm-6 footer-logo">
							<h2><a href="#"><img src={logo} alt="Imperativo Altruista Podcast" title="Imperativo Altruista Podcas" style={{ width: 200}} /></a></h2>
						</div>
						
						
						<div class="col-sm-6 text-right">
							Imperativo Altruista - 2020
						</div>
						
					</div>
					
				</div>
			</section>
			
		</footer>
    ) 
}

export default Footer