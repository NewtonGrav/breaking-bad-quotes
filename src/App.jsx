import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
	display: flex;
	align-items: center;
	margin-top: 7rem;
	flex-direction: column;
`;

const Button = styled.button`
	margin-top: 2rem;
	padding: 1rem 3rem;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 2rem;
	border: 2px solid black;
	color: white;
	background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
	background-size: 350px;
	transition: background-size 0.6s ease;

	:hover {
		cursor: pointer;
		background-size: 500px;
	}
`;

function App() {
	const [frase, setFrase] = useState({
		quote: '',
		author: '',
	});

	useEffect(() => {
		consultarApi();
	}, []);

	const consultarApi = async () => {
		const promise = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
		const frase = await promise.json();
		setFrase(frase[0]);
	};

	return (
		<Contenedor>
			<Frase frase={frase} />
			<Button onClick={consultarApi}>Cambiar Frase</Button>
		</Contenedor>
	);
}

export default App;
