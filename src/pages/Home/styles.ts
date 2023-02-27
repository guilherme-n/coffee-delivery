import styled from 'styled-components';

export const MainWrapper = styled.div`
	display: flex;
	padding: 5.75rem 0;
	gap: 3.5rem;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h2 {
		font-size: 3rem;
		line-height: 130%;
		color: ${(props) => props.theme['base-title']};

		&:nth-child(2) {
			margin-bottom: 1rem;
		}
	}

	p {
		font-size: 1.25rem;
		line-height: 130%;
	}
`;

export const CoffeeDeliveryAdvantagesList = styled.div`
	display: grid;
	grid-row: auto auto;
	grid-template-columns: 2fr 3fr;
	gap: 1.25rem 2.5rem;
`;

export const CoffeeProductsAvailable = styled.div``;
