import { ReactNode } from 'react';
import { Wrapper } from './styles';

export type IconBgColor = 'Yellow' | 'YellowDark' | 'Gray' | 'Purple';

interface IconWithOneOrTwoLinesProps {
	icon: ReactNode;
	iconBgColor: IconBgColor;
	text: string;
	secondaryText?: string;
}

export function IconWithOneOrTwoLines(props: IconWithOneOrTwoLinesProps) {
	const { icon, text, secondaryText, iconBgColor } = props;

	return (
		<Wrapper iconBgColor={iconBgColor}>
			<div>{icon}</div>
			<div>
				<span>{text}</span>
				{secondaryText && <span>{secondaryText}</span>}
			</div>
		</Wrapper>
	);
}
