import { Coffee } from '../../types/coffee';

import expressoTradicional from '../../assets/coffeeTypes/expresso-tradicional.svg';
import expressoAmericano from '../../assets/coffeeTypes/expresso-americano.svg';
import expressoCremoso from '../../assets/coffeeTypes/expresso-cremoso.svg';
import expressoGelado from '../../assets/coffeeTypes/expresso-gelado.svg';
import cafeComLeite from '../../assets/coffeeTypes/cafe-com-leite.svg';
import latte from '../../assets/coffeeTypes/latte.svg';
import capuccino from '../../assets/coffeeTypes/capuccino.svg';
import macchiato from '../../assets/coffeeTypes/macchiato.svg';
import mocaccino from '../../assets/coffeeTypes/mocaccino.svg';
import chocolateQuente from '../../assets/coffeeTypes/chocolate-quente.svg';
import cubano from '../../assets/coffeeTypes/cubano.svg';
import havaiano from '../../assets/coffeeTypes/havaiano.svg';
import arabe from '../../assets/coffeeTypes/arabe.svg';
import irlandes from '../../assets/coffeeTypes/irlandes.svg';

export const coffeesList: Coffee[] = [
	{
		id: '1',
		name: 'Expresso Tradicional',
		description: 'O tradicional cafe feito com agua quente e graos moidos',
		details: ['tradicional'],
		price: 9.9,
		amount: 0,
		imgSrc: expressoTradicional,
	},
	{
		id: '2',
		name: 'Expresso Americano',
		description: 'Expresso diluido, menos intenso que o tradicional',
		details: ['tradicional'],
		price: 8.5,
		amount: 0,
		imgSrc: expressoAmericano,
	},
	{
		id: '3',
		name: 'Expresso Cremoso',
		description: 'Cafe expresso tradicional com espuma cremosa',
		details: ['tradicional'],
		price: 5.75,
		amount: 0,
		imgSrc: expressoCremoso,
	},
	{
		id: '4',
		name: 'Expresso Gelado',
		description: 'Bebida preparada com cafe expresso e cubos de gelo',
		details: ['tradicional', 'gelado'],
		price: 6.1,
		amount: 0,
		imgSrc: expressoGelado,
	},
	{
		id: '5',
		name: 'Cafe com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		details: ['tradicional', 'com leite'],
		price: 8.9,
		amount: 0,
		imgSrc: cafeComLeite,
	},
	{
		id: '6',
		name: 'Latte',
		description:
			'Uma dose de cafe expresso com o dobro de leite e espuma cremosa',
		details: ['tradicional', 'com leite'],
		price: 8.9,
		amount: 0,
		imgSrc: latte,
	},
	{
		id: '7',
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de cafe, leite e espuma',
		details: ['tradicional', 'com leite'],
		price: 11.5,
		amount: 0,
		imgSrc: capuccino,
	},
	{
		id: '8',
		name: 'Macchiato',
		description:
			'Cafe expresso misturado com um pouco de leite quente e espuma',
		details: ['tradicional', 'com leite'],
		price: 10.9,
		amount: 0,
		imgSrc: macchiato,
	},
	{
		id: '9',
		name: 'Mocaccino',
		description: 'Cafe expresso com calda de chocolate, pouco leite e espuma',
		details: ['tradicional', 'com leite'],
		price: 7.9,
		amount: 0,
		imgSrc: mocaccino,
	},
	{
		id: '10',
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e cafe',
		details: ['especial', 'com leite'],
		price: 14.5,
		amount: 0,
		imgSrc: chocolateQuente,
	},
	{
		id: '11',
		name: 'Cubano',
		description:
			'Drink gelado de cafe expresso com rum, creme de leite e hortela',
		details: ['especial', 'alcoolico', 'gelado'],
		price: 9.9,
		amount: 0,
		imgSrc: cubano,
	},
	{
		id: '12',
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com cafe e leite de coco',
		details: ['especial'],
		price: 11.9,
		amount: 0,
		imgSrc: havaiano,
	},
	{
		id: '13',
		name: 'Arabe',
		description: 'Bebida preparada com graos de cafe e especiarias',
		details: ['especial'],
		price: 7.2,
		amount: 0,
		imgSrc: arabe,
	},
	{
		id: '14',
		name: 'Irlandes',
		description: 'Bebida a base de cafe, uisque irlandes, acucar e chatilly',
		details: ['especial', 'alcoolico'],
		price: 7.9,
		amount: 0,
		imgSrc: irlandes,
	},
];
