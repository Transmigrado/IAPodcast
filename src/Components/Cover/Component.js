

import React from 'react'
import amaze from '../../assets/animals_that_amaze.jpg'

const Cover = ({ selected }) => {
    return (
        <section className="podcast-hero" style={{ backgroundImage: `url(${amaze})`, height: `${window.innerHeight}px`  }}>
			<div className="podcast-hero-inner">
				<div className="container">
						<div className="podcast-hero-content">
						
						<h2 className="podcast-hero-title"><a href="podcast.html">{selected.title}</a></h2>
						<ul className="podcast-hero-meta">
							<li className="item">Etica</li>
							<li className="item"><i className="fa fa-clock-o"></i> {selected.duration}</li>
							<li className="item"><a href={selected.audio} className="podcast-hero-download"><i className="fa fa-download"></i> Download</a></li>
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
							<source type="audio/mp3" src={selected.audio} />
						</audio>
					</div>
				</div>
				
			</div>
		</section>
    )
}

export default Cover