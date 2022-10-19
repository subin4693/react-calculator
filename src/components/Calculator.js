import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {

	const [ display, setDisplay ] = useState("");
	const handleClick = (e) => {
		setDisplay(display+e.target.name);
	}
	const handleDelete = () => {
		setDisplay(display.slice(0,-1));
	}
	const handleClear = () => {
		setDisplay("");
	}
	const handleSubmit = () => {
		try{
			setDisplay(eval(display));
		}
		catch(e){
			setDisplay("Error");
		}
	}

	return(
		<div className="container">
			<div className="calc__container">
				
				<div type="text" className="outputField">
					{ display }
				</div>
				
				<button onClick={ handleDelete } name="c"> C </button>
				<button onClick={ handleClear } name="()"> () </button>
				<button onClick={ handleClick } name="%" > % </button>
				<button onClick={ handleClick } name="/" > / </button>
				<button onClick={ handleClick } name="7" > 7 </button>
				<button onClick={ handleClick } name="8" > 8 </button>
				<button onClick={ handleClick } name="9" > 9 </button>
				<button onClick={ handleClick } name="*" > * </button>
				<button onClick={ handleClick } name="4" > 4 </button>
				<button onClick={ handleClick } name="5" > 5 </button>
				<button onClick={ handleClick } name="6" > 6 </button>
				<button onClick={ handleClick } name="+" > + </button>
				<button onClick={ handleClick } name="1" > 1 </button>
				<button onClick={ handleClick } name="2" > 2 </button>
				<button onClick={ handleClick } name="3" > 3 </button>
				<button onClick={ handleClick } name="-" > - </button>
				<button onClick={ handleClick } name="0" > 0 </button>
				<button onClick={ handleSubmit }name="=" > = </button>
			</div>
		</div>
		);
}

export default Calculator;