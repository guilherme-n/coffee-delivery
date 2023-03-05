export const priceFormatter = Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

export const extractValueAndSymbolFromMoney = (value: string) => {
	const amount = value.match(/[0-9]+([,.][0-9]+)?/);
	const unit = value.replace(/[0-9]+([,.][0-9]+)?/, '');
	if (amount && unit) {
		return {
			amount: amount[0],
			currency: unit,
		};
	}
	return null;
};
