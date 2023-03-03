import { ReactNode } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

export interface FormAddressValues {
	zip: string;
	street: string;
	number: string;
	additionalInfo: string;
	neighborhood: string;
	city: string;
	state: string;
	paymentMethod: string;
}

export const FormAddressProvider = ({ children }: { children: ReactNode }) => {
	const methods = useForm<FormAddressValues>();

	return <FormProvider {...methods}>{children}</FormProvider>;
};

export const useFormAddress = () => useFormContext<FormAddressValues>();
