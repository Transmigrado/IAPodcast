
import React from 'react'
import amaze from '../../assets/animals_that_amaze.jpg'
import audio from '../../assets/mp3/episode_1.mp3'


const Cover = () => {
    return (
        <section className="podcast-hero" style={{ backgroundImage: `url(${amaze})`, height: `${window.innerHeight}px`  }}>
			<div className="podcast-hero-inner">
				<div className="container">
						<div className="podcast-hero-content">
						<span className="podcast-hero-date">Diciembre</span>
						<h2 className="podcast-hero-title"><a href="podcast.html">Episodio #00 - Titulo!</a></h2>
						<ul className="podcast-hero-meta">
							<li className="item"><a href="#" className="podcast-hero-tag" rel="tag">Etica</a></li>
							<li className="item"><i className="fa fa-clock-o"></i> 45 mins.</li>
							<li className="item"><a href="#" className="podcast-hero-download"><i className="fa fa-download"></i> Download</a></li>
						</ul>
					</div>
				</div>
				
				<div className="podcast-hero-player-content">
					<div className="container">

					<audio
						autoPlay={false}
						controls={true}
						style={{width:'100%', height:'100px'}} 
						>
							<source type="audio/mp3" src={audio} />
						</audio>
					</div>
				</div>
				
			</div>
		</section>
    )
}

export default Cover