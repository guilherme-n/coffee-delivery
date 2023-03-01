import styled from 'styled-components';

interface InputWrapperProps {
	fieldName: string;
}

export const InputWrapper = styled.input<InputWrapperProps>`
	padding: 0.75rem;
	background-color: ${(props) => props.theme['base-input']};
	border: 1px solid ${(props) => props.theme['base-button']};
	border-radius: 4px;
	outline: none;
	grid-area: ${(props) => props.fieldName};
`;
