
import React from 'react'
import diego from '../../assets/diego.png'
import jorge from '../../assets/jorge.jpg'
import samuel from '../../assets/samuel.png'
import luis from '../../assets/luis.png'

const podcasters = [
    {
        name:'Diego Andrade',
        image: diego
    },
    {
        name:'Jorge Acosta',
        image: jorge
    },
    {
        name:'Samuel Álvarez',
        image: samuel
    },
    {
        name:'Luis Mateluna',
        image: luis
    }
]

const Item = ({ name, title, image}) => (
    <div className="col-lg-4 col-lg-offset-0 col-md-8 col-md-offset-2 col-sm-12 mb-40">
        <div className="team-card">
            <figure className="team-card-image"><img src={image} alt={name} title={name} /></figure>
            <div className="team-card-content" style={{paddingBottom:'20px'}}>
                <h2 className="team-card-title">{name}</h2>
            </div>
        </div>
    </div>
)

const BehindMic = () => (
    <section id="about-us" className="section-negative" style={{paddingTop:'20px'}}>
            <div className="container">
            <h2 className="title-default text-center">Detrás de los microfonos</h2>
            <p className="text-center">somos un grupo de amigos interesados en la filosofia y la ciencia detrás del problema mas importante de la existencia: la reducción del sufrimiento y cómo reducirlo/eliminarlo/abolirlo</p>
            <div className="row mb-30" style={{paddingTop:'20px'}}>
                {podcasters.map((item, index) => <Item key={`header_key_${index}`} {...item} />)}
            </div>
        </div>
    </section>
)

export default BehindMic