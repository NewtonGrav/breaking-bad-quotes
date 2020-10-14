import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
	padding: 3rem;
	border-radius: 0.5rem;
	background-color: white;
	max-width: 800px;

	@media (min-width: 992px) {
		margin-top: 10rem;
	}

	h1 {
		position: relative;
		padding-left: 4rem;
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;

		&:before {
			position: absolute;
			content: open-quote;
			left: -1rem;
			top: -2rem;
			font-size: 10rem;
			color: black;
		}
	}

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Frase = ({ frase }) => {
	return (
		<ContenedorFrase>
			<h1>{frase.quote} </h1>
			<p>- {frase.author} </p>
		</ContenedorFrase>
	);
};

export default Frase;
