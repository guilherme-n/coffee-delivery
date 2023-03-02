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
import { CoffeeDetailsCheckout } from './components/CoffeeDetailsCheckout';
import {
	FormContainer,
	SlightlyRoundedContainer,
	IconAndLabel,
	AddressInputList,
	PaymentOptionsContainer,
	PaymentOption,
	TwoBigRoundsContainer,
} from './styles';

export type PaymentMethod = 'CreditCard' | 'DebitCard' | 'Money';

export function Checkout() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
		null
	);
	const { coffees } = useCoffee();

	const handlePaymentMethodClick = (PaymentMethod: PaymentMethod) => {
		setPaymentMethod(PaymentMethod);
	};

	return (
		<FormContainer>
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
						<Input fieldName='zip' type='number' placeholder='Zip' />
						<Input fieldName='street' placeholder='Street' />
						<Input fieldName='number' placeholder='Number' />
						<Input
							fieldName='additional-info'
							type='text'
							placeholder='Apt / Suite / Other'
						/>
						<Input fieldName='neighborhood' placeholder='Neighborhood' />
						<Input fieldName='city' placeholder='City' />

						<Input fieldName='state' placeholder='State' />
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
					<div>
						<div>
							<span>Items price</span>
							<span>R$ 29,70</span>
						</div>
						<div>
							<span>Delivery fee</span>
							<span>R$ 3,50</span>
						</div>
						<div>
							<span>Total</span>
							<span>R$ 33,20</span>
						</div>
						<button>confirm your order</button>
					</div>
				</TwoBigRoundsContainer>
			</div>
		</FormContainer>
	);
}
