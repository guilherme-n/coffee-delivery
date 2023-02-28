import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: ${(props) => props.theme['base-card']};
	width: 16rem;
	height: 19.375rem;
	border-radius: 8px 36px 8px 36px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem 1.125rem 1rem;

	img {
		width: 7.5rem;
		height: 7.5rem;
		position: relative;
		top: -1.25rem;
	}

	h5 {
		font-size: 1.25rem;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		color: ${(props) => props.theme['base-subtitle']};
	}

	p {
		text-align: center;
		color: ${(props) => props.theme['base-label']};
		font-size: 0.875rem;
	}
`;

export const PillShapesContainer = styled.div`
	display: flex;
	gap: 0.25rem;

	span {
		background-color: ${(props) => props.theme['yellow-light']};
		color: ${(props) => props.theme['yellow-dark']};
		text-transform: uppercase;
		border-radius: 20px;
		padding: 0.25rem 0.5rem;
		font-size: 0.625rem;
		font-weight: 700;
	}
`;

export const PriceAndAmountContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 0.5rem 0 0.5rem;

	div:last-child {
		display: flex;
		gap: 0.5rem;
	}
`;

export const PriceLabels = styled.div`
	display: flex;
	gap: 0.25rem;
	align-items: center;
	color: ${(props) => props.theme['base-text']};

	span:first-child {
		font-size: 0.875rem;
	}

	span:last-child {
		font-size: 1.5rem;
		font-weight: bold;
		font-family: 'Baloo 2';
	}
`;

export const AmountButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	background-color: ${(props) => props.theme['base-button']};

	button {
		display: flex;
		align-items: center;
		background-color: inherit;
		outline: none;
		border: 0;
		color: ${(props) => props.theme['purple']};

		&:hover {
			cursor: pointer;
		}
	}
`;

export const CartContainer = styled.div`
	background-color: ${(props) => props.theme['purple-dark']};
	padding: 0.5rem;
	border-radius: 6px;
	display: flex;
`;
