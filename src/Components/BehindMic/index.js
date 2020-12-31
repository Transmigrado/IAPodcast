
import React from 'react'
import diego from '../../assets/diego.png'
import jorge from '../../assets/jorge.jpg'

const podcasters = [
    {
        name:'Diego Andrade',
        title: 'Traductor',
        description: 'Descripción',
        image: diego
    },
    {
        name:'Jorge Acosta',
        title: 'Desarrollador',
        description: 'Descripción',
        image: jorge
    },
    {
        name:'Samuel Álvarez',
        title: 'Músico',
        description: 'Descripción',
        image: diego
    }
]

const BehindMic = () => {

    
    const Item = ({ name, title, description, image}) => (
        <div className="col-lg-4 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-12 mb-40">
            <div className="team-card">
                <figure className="team-card-image"><img src={image} alt="John Doe" title="John Doe" /></figure>
                <div className="team-card-content">
                    <h2 className="team-card-title">{name}</h2>
                    <p className="team-card-job">{title}</p>
                    <p className="team-card-description">{description}</p>
                </div>
            </div>
        </div>
    )

    return (
        <section id="about-us" className="section-negative" style={{paddingTop:'20px'}}>
				<div className="container">
                <h2 className="title-default text-center">Detrás de los microfonos...</h2>
                <div className="row mb-30">
                    {podcasters.map((item, index) => <Item key={`header_key_${index}`} {...item} />)}
                </div>
            </div>
        </section>
    )
}

export default BehindMic