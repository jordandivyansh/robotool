
import React from 'react';

function Card({id, name, email}) {
    return (
        <div className='tc bg-black dib br3 pa3 ma2 grow bw2 shadow-5 yellow { color: var(--yellow); }
		b--dashed { border-style: dashed; }'>
            <img src={`https://robohash.org/${id}?size=100x100`} alt={`${name}-Robo`}/>
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;
