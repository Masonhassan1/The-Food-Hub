import React from 'react';

function Instructions({ instr }) {
	if (!instr) return <div> </div>;
	else {
		const instructionsArray = instr.split('.');
		return (
			<div className='instructions-container'>
				<h2>Instructions</h2>
				<ol className='instructions'>
					{instructionsArray.map(instruction => instruction.length > 4 && <li>{instruction}.</li>)}
				</ol>
			</div>
		);
	}
}

export default Instructions;
