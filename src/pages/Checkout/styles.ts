import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;

	h4 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: ${(props) => props.theme.fontSize['title-xs']};
		margin-bottom: 1rem;
	}

	& > div:first-child {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
`;

export const SlightlyRoundedContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px;
	gap: 2rem;
`;

interface IconAndLabelProps {
	iconColor: 'yellow' | 'purple';
}

export const IconAndLabel = styled.div<IconAndLabelProps>`
	display: flex;
	gap: 0.5rem;

	svg {
		color: ${(props) =>
			props.iconColor === 'yellow'
				? props.theme['yellow-dark']
				: props.theme['purple-dark']};
	}

	div span:first-child {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: ${(props) => props.theme.fontSize['text-m']};
	}

	div span:last-child {
		color: ${(props) => props.theme['base-text']};
		font-size: ${(props) => props.theme.fontSize['text-s']};
	}

	div {
		display: flex;
		flex-direction: column;
	}
`;

export const AddressInputList = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 60px);
	gap: 1rem 0.75rem;
	grid-template-areas:
		'zip zip zip . . . . .'
		'street street street street street street street street'
		'number number number additional-info additional-info additional-info additional-info additional-info'
		'neighborhood neighborhood neighborhood city city city city state';
`;

export const PaymentOptionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

interface PaymentOptionProps {
	selected: boolean;
}

export const PaymentOption = styled.button.attrs({
	type: 'button',
})<PaymentOptionProps>`
	display: flex;
	gap: 0.75rem;

	background: ${(props) => props.theme['base-button']};
	text-transform: uppercase;
	padding: 1rem;
	border-radius: 6px;
	width: 11.125rem;

	border: 1px solid transparent;

	${(props) => {
		if (props.selected) {
			return {
				background: props.theme['purple-light'],
				border: `1px solid ${props.theme['purple']}`,
			};
		}
	}}

	&:hover {
		cursor: pointer;
	}

	svg {
		color: ${(props) => props.theme['purple']};
	}

	span {
		color: ${(props) => props.theme['base-text']};
		font-size: ${(props) => props.theme.fontSize['button-s']};
	}
`;
