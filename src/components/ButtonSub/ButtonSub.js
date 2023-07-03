import React, { useState } from 'react';
import '../ButtonSub/ButtonSub.scss';


function ButtonSub() {
	const handleClick = () => {
		console.log('Button clicked!');
	};

	return (
		<button className="buttonsub" onClick={handleClick}>
			Subscribe now
		</button>
	);
}

export default ButtonSub;