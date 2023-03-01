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
