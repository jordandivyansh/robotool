import React from 'react';

const Card = ({ name, email, id }) => {
	return(
		<div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5 yellow { color: var(--yellow); }
		b--dashed { border-style: dashed; }'>
		 <img  alt='Robo' src={'https://robohash.org/${id}?size=100x100'}/>
		 <div>
		  <h2>{name}</h2>
		  <p>{email}</p>
		 </div>
		</div>
		);
}
export default Card;