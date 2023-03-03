import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPin,
	Money,
} from 'phosphor-react';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { useCoffee } from '../../hooks/CoffeeContext';
import { Coffee } from '../../types/coffee';
import { CoffeeDetailsCheckout } from './components/CoffeeDetailsCheckout';
import {
	FormContainer,
	SlightlyRoundedContainer,
	IconAndLabel,
	AddressInputList,
	PaymentOptionsContainer,
	PaymentOption,
	TwoBigRoundsContainer,
	PricesLabelList,
	PriceLabel,
	PriceLabelTotal,
} from './styles';

import {
	FormAddressValues,
	useFormAddress,
} from '../../hooks/FormAddressContext';

export type PaymentMethod = 'CreditCard' | 'DebitCard' | 'Money';

const DELIVERY_FEE = 3.5;

export function Checkout() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
		null
	);
	const { coffees } = useCoffee();

	const { handleSubmit } = useFormAddress();

	const getTotalPrice = (coffees: Coffee[]) => {
		return coffees.reduce((prev, curr) => {
			return prev + curr.price * curr.amount;
		}, 0);
	};

	const handlePaymentMethodClick = (PaymentMethod: PaymentMethod) => {
		setPaymentMethod(PaymentMethod);
	};

	const handleConfirmOrder = (data: FormAddressValues) => {
		alert('data sent');
	};

	const itemsPrice = getTotalPrice(coffees);

	return (
		<FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
			<div>
				<h4>Complete your order</h4>
				<SlightlyRoundedContainer>
					<IconAndLabel iconColor='yellow'>
						<MapPin size={22} />
						<div>
							<span>Delivery address</span>
							<span>
								Enter the address that you would like to get your order
							</span>
						</div>
					</IconAndLabel>

					<AddressInputList>
						<Input fieldName='zip' placeholder='Zip' required minLength={8} />
						<Input fieldName='street' placeholder='Street' required />
						<Input fieldName='number' placeholder='Number' required />
						<Input
							fieldName='additionalInfo'
							placeholder='Apt / Suite / Other'
						/>
						<Input
							fieldName='neighborhood'
							placeholder='Neighborhood'
							required
						/>
						{<Input fieldName='city' placeholder='City' required />}

						<Input fieldName='state' placeholder='State' required />
					</AddressInputList>
				</SlightlyRoundedContainer>

				<SlightlyRoundedContainer>
					<IconAndLabel iconColor='purple'>
						<CurrencyDollar size={22} />
						<div>
							<span>Payment</span>
							<span>
								Pay only when you get your order. Pick one option below.
							</span>
						</div>
					</IconAndLabel>
					<PaymentOptionsContainer>
						<PaymentOption
							selected={paymentMethod === 'CreditCard'}
							onClick={() => handlePaymentMethodClick('CreditCard')}
						>
							<CreditCard />
							<span>credit card</span>
						</PaymentOption>
						<PaymentOption
							selected={paymentMethod === 'DebitCard'}
							onClick={() => handlePaymentMethodClick('DebitCard')}
						>
							<Bank />
							<span>debit card</span>
						</PaymentOption>
						<PaymentOption
							selected={paymentMethod === 'Money'}
							onClick={() => handlePaymentMethodClick('Money')}
						>
							<Money />
							<span>money</span>
						</PaymentOption>
					</PaymentOptionsContainer>
				</SlightlyRoundedContainer>
			</div>
			<div>
				<h4>Selected coffees</h4>
				<TwoBigRoundsContainer>
					{coffees.map((coffee) => {
						if (coffee.amount > 0) {
							return <CoffeeDetailsCheckout coffee={coffee} key={coffee.id} />;
						}
					})}
					<PricesLabelList>
						<PriceLabel>
							<span>Items price</span>
							<span>R$ {itemsPrice.toFixed(2)}</span>
						</PriceLabel>
						<PriceLabel>
							<span>Delivery fee</span>
							<span>R$ {DELIVERY_FEE.toFixed(2)}</span>
						</PriceLabel>
						<PriceLabelTotal>
							<span>Total</span>
							<span>R$ {(itemsPrice + DELIVERY_FEE).toFixed(2)}</span>
						</PriceLabelTotal>
					</PricesLabelList>
					<button>confirm your order</button>
				</TwoBigRoundsContainer>
			</div>
		</FormContainer>
	);
}
