import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPin,
	Money,
} from 'phosphor-react';
import { useState } from 'react';
import { Input } from '../../components/Input';
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
import { useNavigate } from 'react-router-dom';
import { PaymentMethod } from '../../types/paymentMethod';
import { priceFormatter } from '../../Utils/formatter';
import { useDispatch } from 'react-redux';
import { coffeeActions } from '../../store';
import { useCoffeeSelector } from '../../store/useCoffeeSelector';

const DELIVERY_FEE = 3.5;

export function Checkout() {
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
		null
	);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useFormAddress();

	const dispatch = useDispatch();
	const coffees = useCoffeeSelector((state) => state);

	const navigate = useNavigate();

	const coffeesInCart = coffees.filter((c) => c.amount > 0);

	const getTotalPrice = (coffees: Coffee[]) => {
		return coffees.reduce((prev, curr) => {
			return prev + curr.price * curr.amount;
		}, 0);
	};

	const handlePaymentMethodClick = (PaymentMethod: PaymentMethod) => {
		setPaymentMethod(PaymentMethod);
	};

	const handleConfirmOrder = (data: FormAddressValues) => {
		dispatch(coffeeActions.clearCart());
		navigate({ pathname: '/success' });
	};

	const itemsPrice = getTotalPrice(coffeesInCart);

	const paymentMethodError = !!errors.paymentMethod;

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
						<Input
							fieldName='zip'
							placeholder='Zip'
							required
							minLength={8}
							tabIndex={1}
						/>
						<Input
							fieldName='street'
							placeholder='Street'
							tabIndex={1}
							required
						/>
						<Input
							fieldName='number'
							placeholder='Number'
							tabIndex={1}
							required
						/>
						<Input
							fieldName='additionalInfo'
							placeholder='Apt / Suite / Other'
							tabIndex={1}
						/>
						<Input
							fieldName='neighborhood'
							placeholder='Neighborhood'
							tabIndex={1}
							required
						/>

						<Input fieldName='city' placeholder='City' tabIndex={1} required />

						<Input fieldName='state' placeholder='St.' tabIndex={1} required />
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
							onClick={() => handlePaymentMethodClick('CreditCard')}
							checked={paymentMethod === 'CreditCard'}
							tabIndex={2}
						>
							<CreditCard />
							<input
								{...register('paymentMethod', { required: true })}
								type='radio'
								id='credit-card'
								value='credit-card'
							/>
							<span>credit card</span>
						</PaymentOption>
						<PaymentOption
							onClick={() => handlePaymentMethodClick('DebitCard')}
							checked={paymentMethod === 'DebitCard'}
							tabIndex={2}
						>
							<Bank />
							<input
								{...register('paymentMethod')}
								type='radio'
								id='debit-card'
								value='debit-card'
							/>
							<span>debit card</span>
						</PaymentOption>
						<PaymentOption
							onClick={() => handlePaymentMethodClick('Money')}
							checked={paymentMethod === 'Money'}
							tabIndex={2}
						>
							<Money />
							<input
								{...register('paymentMethod')}
								type='radio'
								id='money'
								value='money'
							/>
							<span>Money</span>
						</PaymentOption>
					</PaymentOptionsContainer>
					{paymentMethodError && <span>Choose a payment method</span>}
				</SlightlyRoundedContainer>
			</div>
			<div>
				<h4>Selected coffees</h4>
				<TwoBigRoundsContainer>
					{coffeesInCart.map((coffee) => {
						if (coffee.amount > 0) {
							return <CoffeeDetailsCheckout coffee={coffee} key={coffee.id} />;
						}
					})}
					<PricesLabelList>
						<PriceLabel>
							<span>Items price</span>
							<span>{priceFormatter.format(itemsPrice)}</span>
						</PriceLabel>
						<PriceLabel>
							<span>Delivery fee</span>
							<span>{priceFormatter.format(DELIVERY_FEE)}</span>
						</PriceLabel>
						<PriceLabelTotal>
							<span>Total</span>
							<span>{priceFormatter.format(itemsPrice + DELIVERY_FEE)}</span>
						</PriceLabelTotal>
					</PricesLabelList>

					<button tabIndex={3} disabled={coffeesInCart.length === 0}>
						place order
					</button>
				</TwoBigRoundsContainer>
			</div>
		</FormContainer>
	);
}
