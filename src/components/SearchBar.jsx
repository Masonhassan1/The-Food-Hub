import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

function SearchBar(props) {
	const [inputSearch, setInputSearch] = useState('');
	const handleSearch = e => {
		e.preventDefault();
		props.onSubmit(inputSearch);
	};
	const handleNameChange = e => {
		setInputSearch(e.target.value);
	};
	return (
		<div>
			<Form inline className='searchBar' onSubmit={handleSearch}>
				<input
					value={inputSearch}
					type='text'
					onChange={handleNameChange}
					placeholder='Search'
					className='mr-sm-2'
				/>
				<button
					style={{ color: 'white', background: 'rgb(65, 65, 65)' }}
					className='button btn search-btn'>
					Search
				</button>
			</Form>
		</div>
	);
}

export default SearchBar;
