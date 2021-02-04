
import React from 'react'
import NewLetter from '../NewLetter'
import BehindMic from '../BehindMic'
import { IMAGE } from './image'

const posts = [
	{
		description: '¿Qué es lo que realmente importa? Si le preguntamos a 10 personas, probablemente obtendremos 10 respuesta distintas.  Y, aunque todos creemos tener una idea más o menos clara de cómo sería un mundo mejor, probablemente no hemos pensado mucho en los detalles. Esto puede ser un gran problema, sobre todo considerando que cualquier intento de mejorar implicará conflictos entre distintos valores y prioridades, cuya resolución para un lado o para el otro puede llevar a resultados totalmente distintos. Por esto, cabe preguntarse también: ¿qué valores compartimos y cuáles deberíamos priorizar?',
		duration: '46 min',
		title: 'Episodio 1 - PodCast',
		date: 'Abril, 2020'
	},
]

const Main = () => {

	const RenderPost = ({ index, item }) => {
		return (
			<div className={`col-sm-${(index === 0 || posts.length === 2) ? '12' : '6'} mb-40`}>
				<div className={`podcast-card ${(index === 0 || posts.length === 2) ? 'full':'boxed'}`}>
					<figure className="podcast-image">
						<a href="podcast-soundcloud.html"><img src={IMAGE} alt="Seattle" title="Seattle" /></a>
					</figure>
					<div className="podcast-content">
						<span className="podcast-date">{item.date}</span>
						<h2 className="podcast-title"><a href="podcast-soundcloud.html">{item.title}</a></h2>
						<p className="podcast-excerpt"><a href="podcast-soundcloud.html">{item.description}</a></p>
						<ul className="podcast-meta">
							<li className="item"><i className="fa fa-clock-o"></i> {item.duration}</li>
							<li className="item"><a href="podcast-soundcloud.html" className="podcast-play"><i className="fa fa-play"></i> Reproducir Episodio</a></li>
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
						{posts.map((item, index) => <RenderPost item={item} index={index} />)}
					</div>
				</div>
			</section>
			<BehindMic />
			<NewLetter />
		</main>
    )
}

export default Main