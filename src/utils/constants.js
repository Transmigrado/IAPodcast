
import assets from '../assets'
import S01E00 from '../assets/mp3/S01E00.mp3'
import S01E01 from '../assets/mp3/S01E01.mp3'
import S01E02 from '../assets/mp3/S01E02.mp3'

const POSTS = [
	{
		description: '¿Tenemos el deber de ayudar a otros o solo es éticamente opcional hacerlo? ¿Es siempre bueno el altruismo o se debe considerar neutral o quizás incluso negativo? ¿Qué argumentos se pueden presentar para estas distintas posturas y por qué creemos nosotros que es imperativo ser altruista? En este episodio exploramos estas interrogantes y un famoso experimento filosófico planteado originalmente por Peter Singer.',
		duration: ' 1 hr 11 min',
		title: 'Episodio #02: El deber de ayudar',
		date: 'Abril, 2021',
		cover: assets.images.cover.S01E02,
        audio: S01E02,
		postId: 'S01E02',
		youtubeLink: 'https://www.youtube.com/watch?v=IAZ-8rSbMwo',
	},
	{
		description: 'En redes sociales, las fotos y videos de animales son muy populares. Nos divierten sus travesuras, nos sorprenden sus habilidades y nos dan ternura sus capacidades emocionales. Ver casos de crueldad y maltrato suele causar rabia y tristeza, mientras las historias de rescate, o incluso de animales que escapan del matadero y luego viven felices en un santuario, nos alegran y dan esperanza. Muchos de nosotros, al ver un perro hambriento querremos darle algo de comer o si encontramos a un ave caída de un nido trataremos de ayudarla. Incluso compartimos nuestras casas con otros animales a quienes queremos y tratamos como parte de nuestra familia...',
		duration: ' 40 min',
		title: 'Episodio #01: Nuestra relación con los animales',
		date: 'Marzo, 2021',
		cover: assets.images.cover.S01E01,
        audio: S01E01,
		youtubeLink: 'https://www.youtube.com/watch?v=JtAZTaOObqM',
		transcription: assets.transcriptions.S01E01,
		postId: 'S01E01',
		readTime: '21 min'
	},
	
	{
		description: '¿Qué es lo que realmente importa? Si le preguntamos a 10 personas, probablemente obtendremos 10 respuesta distintas.  Y, aunque todos creemos tener una idea más o menos clara de cómo sería un mundo mejor, probablemente no hemos pensado mucho en los detalles. Esto puede ser un gran problema, sobre todo considerando que cualquier intento de mejorar implicará conflictos entre distintos valores y prioridades, cuya resolución para un lado o para el otro puede llevar a resultados totalmente distintos. Por esto, cabe preguntarse también: ¿qué valores compartimos y cuáles deberíamos priorizar?',
		duration: ' 46 min',
		title: 'Episodio Piloto - PodCast',
		date: 'Abril, 2020',
		cover: assets.images.cover.S01E00,
        audio: S01E00,
		youtubeLink: 'https://www.youtube.com/watch?v=wb9tBuMQPLs',
		transcription: assets.transcriptions.S01E00,
		postId: 'S01E00',
		readTime: '22 min'
	},
	
]

const constants = {
    POSTS
}

export default constants