import { InputHTMLAttributes } from 'react';
import {
	FormAddressValues,
	useFormAddress,
} from '../../hooks/FormAddressContext';
import { InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	fieldName: keyof FormAddressValues;
}

export function Input(props: InputProps) {
	const { fieldName } = props;
	const { register } = useFormAddress();

	return <InputWrapper {...props} {...register(fieldName)} />;
}
