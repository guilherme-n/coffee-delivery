import styled from 'styled-components';

export const FormContainer = styled.form`
	display: flex;
	justify-content: space-between;
	h4 {
		color: ${(props) => props.theme['base-subtitle']};
		font-size: ${(props) => props.theme.fontSize['title-xs']};
		margin-bottom: 1rem;
	}
`;

export const DeliveryAddress = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2.5rem;
	background-color: ${(props) => props.theme['base-card']};
	border-radius: 6px;
	gap: 2rem;
`;

export const AddressLabels = styled.div`
	display: flex;
	gap: 0.5rem;

	svg {
		color: ${(props) => props.theme['yellow-dark']};
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
