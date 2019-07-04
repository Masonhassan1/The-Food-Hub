import React from 'react';

function Instructions({ instr }) {
	if (!instr) return <div> </div>;
	else {
		const instructionsArray = instr.split('.');
		return (
			<ol className='instructions'>
				{instructionsArray.map(instruction => (
					<li>{instruction}</li>
				))}
			</ol>
		);
	}
}

export default Instructions;
