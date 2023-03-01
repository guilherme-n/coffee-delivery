import { InputHTMLAttributes } from 'react';
import { InputWrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	fieldName: string;
}

export function Input(props: InputProps) {
	return <InputWrapper {...props} />;
}
