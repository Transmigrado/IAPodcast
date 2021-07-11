import React from 'react'
import pig from '../../assets/pig.jpg'

const AboutUsCover = () => {
    return (
        <main id="main" class="main" >
		
			<header class="page-header" style={{backgroundImage:`url(${pig})`}}>
				<div class="page-header-inner">
					<div class="container">
						<div class="page-header-content text-center">
							<h2>Nosotros</h2>
						</div>
					</div>
				</div>
			</header>
			

			<section id="about-us" class="section-negative">
				<div class="container" style={{padding: 30}}>
					
                    <p>Imperativo Altruista surge de una convicción: nuestra misión más importante como humanos es intentar reducir el sufrimiento. Creemos que el sufrimiento importa independiente de qué ser lo experimente. Estas son ideas con raíces milenarias, pero con implicancias históricamente ignoradas. Nuestro objetivo es contribuir a la difusión de estas ideas y ampliar nuestro círculo de consideración moral para abarcar también a los demás animales.</p>
                    <h3 style={{marginTop: 20}}>MISIÓN</h3>
                    Sensibilizar y promover la discusión sobre el problema del sufrimiento y su reducción, con especial atención en los animales que viven en granjas y en la naturaleza.
                    
                    <h3 style={{marginTop: 20}}>VISIÓN</h3>
                    Nuestra visión consiste en un mundo donde los humanos participan activamente en ayudar a otros, en pos de reducir o eliminar el sufrimiento involuntario de cada individuo que tenga la capacidad de sentir.
                    <h3 style={{marginTop: 20}}>VALORES</h3>
                    <ul>
                        <li>Compasión</li>
                        <li>Humildad</li>
                        <li>Racionalidad</li>
                        <li>Responsabilidad</li>
                    </ul>
				</div>
			</section>
			
		</main>
    )
}

export default AboutUsCover