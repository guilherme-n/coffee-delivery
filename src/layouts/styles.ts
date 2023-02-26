import styled from 'styled-components';

export const Wrapper = styled.nav`
	padding: 4rem 0;
	display: flex;
	justify-content: space-between;

	& > div {
		display: flex;
		justify-content: space-between;
		gap: 1.5rem;
	}
`;

export const Location = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.25rem;
	padding: 0.5rem;
	border-radius: 6px;
	background-color: ${(props) => props.theme['purple-light']};
	color: ${(props) => props.theme['purple-dark']};
`;

export const Cart = styled.div`
	padding: 0.5rem;
	border-radius: 6px;
	background-color: ${(props) => props.theme['yellow-light']};
	color: ${(props) => props.theme['yellow-dark']};
`;
