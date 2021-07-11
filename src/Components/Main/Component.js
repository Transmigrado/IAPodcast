
import React from 'react'
import BehindMic from '../BehindMic'
import constants from '../../utils/constants'

const Main = ({selectPost}) => {

	const RenderPost = ({ index, item }) => {
		const onClick = () => {
			selectPost(item)
		}
		return (
			<div className={`col-sm-${(index === 0) ? '12' : '6'} mb-40`}>
				<div className={`podcast-card ${(index === 0) ? 'full':'boxed'}`}>
					<figure className="podcast-image">
						<a href={item.youtubeLink} target="_blank" rel="noreferrer"><img src={item.cover} alt={item.title} title={item.title} /></a>
					</figure>
					<div className="podcast-content">
						<span className="podcast-date">{item.date}</span>
						<h2 className="podcast-title"><a href="#">{item.title}</a></h2>
						<p className="podcast-excerpt"><a href="#">{item.description}</a></p>
						<ul className="podcast-meta">
							<li className="item"><i className="fa fa-clock-o"></i>{item.duration}</li>
							<li className="item"><a href="#" onClick={onClick} className="podcast-play"><i className="fa fa-play"></i> Reproducir Episodio</a></li>
						</ul>
					</div>
				</div>
			</div>			
		)
	}

    return (
        <main id="main" className="main">
            <section id="#episodes" className="section-positive">
				<div className="container">
					<h2 className="title-default">Episodios</h2>
					<div className="row">
						{constants.POSTS.map((item, index) => <RenderPost item={item} index={index} />)}
					</div>
				</div>
			</section>
			<BehindMic />
		</main>
    )
}

export default Main