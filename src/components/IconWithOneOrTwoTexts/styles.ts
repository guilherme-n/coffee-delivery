import styled from 'styled-components';
import { IconBgColor } from '.';

interface WrapperProps {
	iconBgColor: IconBgColor;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	div:first-child {
		display: flex;
		border-radius: 50%;
		padding: 0.5rem;

		background-color: ${(props) => {
			switch (props.iconBgColor) {
				case 'Yellow':
					return props.theme['yellow'];
				case 'YellowDark':
					return props.theme['yellow-dark'];
				case 'Gray':
					return props.theme['base-text'];
				case 'Purple':
					return props.theme['purple-dark'];
			}
		}};
	}

	div:last-child {
		display: flex;
		flex-direction: column;

		span {
			line-height: 130%;

			& + span {
				font-weight: bold;
			}
		}
	}

	svg {
		color: ${(props) => props.theme.white};
	}
`;
