import React, { useState } from 'react'
import owl from '../../assets/owl.jpeg'
import { txtToArray }  from '../../utils/transcription'

const TranscriptionPage = ({ list }) => {

    const [transcription, setTranscription] = useState([])
  
	const RenderPost = ({ index, item }) => {

		const onClick = () => {
           
			fetch(item.transcription)
                .then(response => response.text())
                .then(data => {
                    setTranscription(txtToArray(data))
                })
		}

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
							<li className="item"><a href="#" onClick={onClick} className="podcast-play"><i className="fa fa-play"></i> Leer transcripción</a></li>
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
                    {transcription.length === 0 && list.filter(({transcription}) => transcription).map((item, index) => <RenderPost item={item} index={index} />)}
                    {transcription.map(e => (
                        <div className="row">
                            <div className="col-sm-2">
                                <p className="timeCapsule">{e.time}</p>
                                <p><img className="avatar" src={e.avatar} alt="" title="" /> {e.name}</p>
                            </div >
                            <p className="col-sm-10">{e.txt}</p>
                        </div>
                    ))}

                </div>
			</section>
			
		</main>
    )
}

export default TranscriptionPage