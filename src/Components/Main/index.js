
import React from 'react'
import BehindMic from '../BehindMic'
import assets from '../../assets'

const posts = [
	{
		description: '¿Tenemos el deber de ayudar a otros o solo es éticamente opcional hacerlo? ¿Es siempre bueno el altruismo o se debe considerar neutral o quizás incluso negativo? ¿Qué argumentos se pueden presentar para estas distintas posturas y por qué creemos nosotros que es imperativo ser altruista? En este episodio exploramos estas interrogantes y un famoso experimento filosófico planteado originalmente por Peter Singer.',
		duration: ' 1 hr 11 min',
		title: 'Episodio #02: El deber de ayudar',
		date: 'Abril, 2021',
		cover: assets.images.cover.S01E02
	},
	{
		description: 'En redes sociales, las fotos y videos de animales son muy populares. Nos divierten sus travesuras, nos sorprenden sus habilidades y nos dan ternura sus capacidades emocionales. Ver casos de crueldad y maltrato suele causar rabia y tristeza, mientras las historias de rescate, o incluso de animales que escapan del matadero y luego viven felices en un santuario, nos alegran y dan esperanza. Muchos de nosotros, al ver un perro hambriento querremos darle algo de comer o si encontramos a un ave caída de un nido trataremos de ayudarla. Incluso compartimos nuestras casas con otros animales a quienes queremos y tratamos como parte de nuestra familia...',
		duration: ' 40 min',
		title: 'Episodio #01: Nuestra relación con los animales',
		date: 'Marzo, 2021',
		cover: assets.images.cover.S01E01
	},
	
	{
		description: '¿Qué es lo que realmente importa? Si le preguntamos a 10 personas, probablemente obtendremos 10 respuesta distintas.  Y, aunque todos creemos tener una idea más o menos clara de cómo sería un mundo mejor, probablemente no hemos pensado mucho en los detalles. Esto puede ser un gran problema, sobre todo considerando que cualquier intento de mejorar implicará conflictos entre distintos valores y prioridades, cuya resolución para un lado o para el otro puede llevar a resultados totalmente distintos. Por esto, cabe preguntarse también: ¿qué valores compartimos y cuáles deberíamos priorizar?',
		duration: ' 46 min',
		title: 'Episodio Piloto - PodCast',
		date: 'Abril, 2020',
		cover: assets.images.cover.S01E00
	},
	
]

const Main = () => {

	const RenderPost = ({ index, item }) => {
		return (
			<div className={`col-sm-${(index === 0) ? '12' : '6'} mb-40`}>
				<div className={`podcast-card ${(index === 0 || posts.length === 2) ? 'full':'boxed'}`}>
					<figure className="podcast-image">
						<a href="#"><img src={item.cover} alt="Seattle" title="Seattle" /></a>
					</figure>
					<div className="podcast-content">
						<span className="podcast-date">{item.date}</span>
						<h2 className="podcast-title"><a href="#">{item.title}</a></h2>
						<p className="podcast-excerpt"><a href="#">{item.description}</a></p>
						<ul className="podcast-meta">
							<li className="item"><i className="fa fa-clock-o"></i>{item.duration}</li>
							<li className="item"><a href="#" className="podcast-play"><i className="fa fa-play"></i> Reproducir Episodio</a></li>
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
		</main>
    )
}

export default Main