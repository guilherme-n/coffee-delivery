import styled from 'styled-components';

export const Wrapper = styled.nav`
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;

	& > div {
		display: flex;
		gap: 1.5rem;
	}

	div a {
		padding: 0.5rem;
		display: flex;
		align-items: center;
		border-radius: 6px;
		background-color: ${(props) => props.theme['yellow-light']};
		color: ${(props) => props.theme['yellow-dark']};
		position: relative;
	}
`;

export const Location = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	background-color: ${(props) => props.theme['purple-light']};
	color: ${(props) => props.theme['purple-dark']};
`;

export const CoffeesCountIcon = styled.span`
	position: absolute;
	top: -12px;
	right: -12px;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 25px;
	height: 25px;
	border-radius: 50%;

	background: ${(props) => props.theme['yellow-dark']};
	color: ${(props) => props.theme['white']};
`;
