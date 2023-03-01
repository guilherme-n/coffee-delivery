import { ReactNode } from 'react';
import { Wrapper } from './styles';

export type IconBgColor = 'Yellow' | 'YellowDark' | 'Gray' | 'Purple';

interface CoffeeDeliveryAdvantagesProps {
	icon: ReactNode;
	iconBgColor: IconBgColor;
	text: string;
}

export function CoffeeDeliveryAdvantages(props: CoffeeDeliveryAdvantagesProps) {
	const { icon, text, iconBgColor } = props;

	return (
		<Wrapper iconBgColor={iconBgColor}>
			<div>{icon}</div>
			<span>{text}</span>
		</Wrapper>
	);
}
