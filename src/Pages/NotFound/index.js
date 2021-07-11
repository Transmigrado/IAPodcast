import React from 'react'
import pig from '../../assets/owl.jpeg'

const NotFound = () => {

    return (
        <main id="main" class="main" >		
			<header class="page-header" style={{backgroundImage:`url(${pig})`}}>
				<div class="page-header-inner">
					<div class="container">
						<div class="page-header-content text-center">
							<h2>404</h2>
						</div>
					</div>
				</div>
			</header>
			

		</main>
    )
}

export default NotFound