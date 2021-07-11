import React from 'react'
import owl from '../../assets/owl.jpeg'
import { Link } from 'react-router-dom'

const TranscriptionPage = ({ list }) => {
  
	const RenderPost = ({ index, item }) => {

		return (
			<div className={`col-sm-12 mb-40`}>
				<div className={`podcast-card ${(index === 0) ? 'full':'boxed'}`}>
					<figure className="podcast-image">
						<a href={item.youtubeLink} target="_blank" rel="noreferrer"><img src={item.cover} alt={item.title} title={item.title} /></a>
					</figure>
					<div className="podcast-content">
						<span className="podcast-date">{item.date}</span>
						<h2 className="podcast-title"><a href="#">{item.title}</a></h2>
						<p className="podcast-excerpt"><a href="#">{item.description}</a></p>
						<ul className="podcast-meta">
							<li className="item"><i className="fa fa-clock-o"></i>{` ${item.readTime} de lectura`}</li>
							<Link to={`/transcriptionDetail/${item.postId}`}><li className="item"><a href="#" className="podcast-play" style={{marginLeft: 10}}><i className="fa fa-book"></i> Leer transcripción</a></li></Link>
						</ul>
					</div>
				</div>
			</div>		
		)
	}

 
    return (
        <main id="main" class="main" >
		
			<header class="page-header" style={{backgroundImage:`url(${owl})`}}>
				<div class="page-header-inner">
					<div class="container">
						<div class="page-header-content text-center">
							<h2>Transcripciones</h2>
						</div>
					</div>
				</div>
			</header>
			

			<section id="about-us" class="section-negative">
				<div class="container" style={{padding: 30}}>
	
                    {list.filter(({transcription}) => transcription).map((item, index) => <RenderPost item={item} index={index} />)}
                    

                </div>
			</section>
			
		</main>
    )
}

export default TranscriptionPage