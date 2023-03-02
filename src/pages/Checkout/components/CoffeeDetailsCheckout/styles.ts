import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-grow: 1;

	padding-bottom: 1.5rem;
	border-bottom: 1px solid ${(props) => props.theme['base-button']};

	&:not(:first-child) {
		padding-top: 1.5rem;
	}

	span {
		color: ${(props) => props.theme['base-text']};
	}

	& > span {
		font-size: ${(props) => props.theme.fontSize['text-m']};
	}

	img {
		width: 4rem;
		height: 4rem;
	}

	& > div {
		display: flex;
		gap: 1.25rem;
	}
`;

export const LabelWithButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	& > div {
		display: flex;
		gap: 0.5rem;

		& > button {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			background: ${(props) => props.theme['base-button']};
			padding: 0 0.5rem;
			border: 0;
			border-radius: 6px;

			&:hover {
				cursor: pointer;
			}

			svg {
				color: ${(props) => props.theme['purple']};
			}

			span {
				text-transform: uppercase;
				font-size: ${(props) => props.theme.fontSize['button-s']};
			}
		}
	}
`;
