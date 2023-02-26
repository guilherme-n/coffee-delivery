import styled from 'styled-components';

interface WrapperProps {
	iconBgColor: string;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	div {
		display: flex;
		background-color: ${(props) => props.iconBgColor};
		border-radius: 50%;
		padding: 0.5rem;
	}
`;
