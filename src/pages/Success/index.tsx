import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import DeliveryMan from '../../assets/delivery-man.svg';
import { useFormAddress } from '../../hooks/FormAddressContext';
import { IconWithOneOrTwoLines } from '../../components/IconWithOneOrTwoTexts';
import { Container, DeliveryData } from './style';
import { PaymentMethod } from '../../types/paymentMethod';

const getAddress = (
	street: string,
	number: string,
	city: string,
	state: string
) => {
	return `Delivery on ${street}, ${number}  - ${city}, ${state.toUpperCase()}`;
};

const getPaymentMethod = (paymentMethod: PaymentMethod) => {
	const payment = paymentMethod.replace('-', ' ');
	return payment.charAt(0).toUpperCase() + payment.slice(1);
};

export function Success() {
	const { getValues } = useFormAddress();

	const { paymentMethod, street, number, city, state } = getValues();

	return (
		<Container>
			<div>
				<h2>Hooray! Order placed</h2>
				<p>Your coffee will be delivered soon enough</p>
				<DeliveryData>
					<IconWithOneOrTwoLines
						icon={<MapPin weight='fill' />}
						text={getAddress(street, number, city, state)}
						iconBgColor='Purple'
					/>

					<IconWithOneOrTwoLines
						icon={<Clock weight='fill' />}
						iconBgColor='Yellow'
						text='Delivery estimation'
						secondaryText='20 - 30 minutes'
					/>

					<IconWithOneOrTwoLines
						icon={<CurrencyDollar />}
						iconBgColor='YellowDark'
						text='Pay when you receive'
						secondaryText={getPaymentMethod(paymentMethod)}
					/>
				</DeliveryData>
			</div>
			<div>
				<img src={DeliveryMan} alt='delivery man' />
			</div>
		</Container>
	);
}
