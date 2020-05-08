import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
		<input
		className='pa3 ba b--green bg-lightest-blue shadow-5 grow '
		type='search' 
		placeholder='Enter the name of your Robo'
		onChange={searchChange}
		/>
		</div>
		);
}
export default SearchBox;