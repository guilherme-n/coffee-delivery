import { ReactNode } from 'react';
import { Wrapper } from './styles';

interface CoffeeDeliveryAdvantagesProps {
	icon: ReactNode;
	iconBgColor: string;
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
