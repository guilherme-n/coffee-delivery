import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPin,
	Money,
} from 'phosphor-react';
import { Input } from '../../components/Input';
import {
	FormContainer,
	DeliveryAddress,
	AddressLabels,
	AddressInputList,
} from './styles';

export function Checkout() {
	return (
		<FormContainer>
			<div>
				<h4>Complete your order</h4>
				<DeliveryAddress>
					<AddressLabels>
						<MapPin size={22} />
						<div>
							<span>Delivery address</span>
							<span>
								Enter the address that you would like to get your order
							</span>
						</div>
					</AddressLabels>

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
				</DeliveryAddress>

				<div>
					<div>
						<CurrencyDollar />
						<div>
							<span>Delivery address</span>
							<span>
								Enter the address that you would like to get your order
							</span>
						</div>
					</div>
					<div>
						<div>
							<CreditCard />
							<span>credit card</span>
						</div>
						<div>
							<Bank />
							<span>debit card</span>
						</div>
						<div>
							<Money />
							<span>money</span>
						</div>
					</div>
				</div>
			</div>
			<div></div>
		</FormContainer>
	);
}
