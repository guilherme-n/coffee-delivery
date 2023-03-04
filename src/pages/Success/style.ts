import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;
	align-items: flex-end;

	h2 {
		font-size: ${(props) => props.theme.fontSize['title-l']};
		color: ${(props) => props.theme['yellow-dark']};
	}

	p {
		font-size: ${(props) => props.theme.fontSize['text-l']};
		color: ${(props) => props.theme['base-subtitle']};
	}

	img {
		position: relative;
		bottom: -17px;
	}
`;

export const DeliveryData = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 32rem;

	padding: 2.5rem;
	border: 1px solid black;
	margin-top: 2.5rem;

	background: ${(props) =>
		`linear-gradient(white, white) padding-box, linear-gradient(to right, ${props.theme.yellow}, ${props.theme.purple}) border-box`};

	border: 1px solid transparent;
	border-radius: 6px 36px;

	& > div {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
`;
