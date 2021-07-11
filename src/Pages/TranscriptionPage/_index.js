import React, { useState, useEffect } from 'react'
import pig from '../../assets/owl.jpeg'
import assets from '../../assets'
import { txtToArray }  from '../../utils/transcription'

const TranscriptionPage = () => {

    const [transcription, setTranscription] = useState([])

    useEffect(() => {
        fetch(assets.transcriptions.TS01E02)
            .then(response => response.text())
            .then(data => {
                setTranscription(txtToArray(data))
            })
    },[])

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