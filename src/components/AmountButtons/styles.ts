import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
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
