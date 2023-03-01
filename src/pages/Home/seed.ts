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
		id: '6aa315b1-aff0-468f-a3e3-d4703c52c5d2',
		name: 'Expresso Tradicional',
		description: 'O tradicional cafe feito com agua quente e graos moidos',
		details: ['tradicional'],
		price: 9.9,
		amount: 0,
		imgSrc: expressoTradicional,
	},
	{
		id: '94705627-a6e2-444b-a5e7-4a48aa163fd5',
		name: 'Expresso Americano',
		description: 'Expresso diluido, menos intenso que o tradicional',
		details: ['tradicional'],
		price: 8.5,
		amount: 0,
		imgSrc: expressoAmericano,
	},
	{
		id: '9dfb5bab-ac28-49b6-b50c-10ec30ee2c2e',
		name: 'Expresso Cremoso',
		description: 'Cafe expresso tradicional com espuma cremosa',
		details: ['tradicional'],
		price: 5.75,
		amount: 0,
		imgSrc: expressoCremoso,
	},
	{
		id: 'bc9fd168-8042-44d6-b4a1-bdf2d866ca8f',
		name: 'Expresso Gelado',
		description: 'Bebida preparada com cafe expresso e cubos de gelo',
		details: ['tradicional', 'gelado'],
		price: 6.1,
		amount: 0,
		imgSrc: expressoGelado,
	},
	{
		id: '50901973-3b35-4bdf-8996-e2ee41725504',
		name: 'Cafe com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		details: ['tradicional', 'com leite'],
		price: 8.9,
		amount: 0,
		imgSrc: cafeComLeite,
	},
	{
		id: '80ea4a4f-20ec-4b06-864e-7d5fda4b7409',
		name: 'Latte',
		description:
			'Uma dose de cafe expresso com o dobro de leite e espuma cremosa',
		details: ['tradicional', 'com leite'],
		price: 8.9,
		amount: 0,
		imgSrc: latte,
	},
	{
		id: '30d85974-abd0-435c-820f-f0d02f099ad1',
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de cafe, leite e espuma',
		details: ['tradicional', 'com leite'],
		price: 11.5,
		amount: 0,
		imgSrc: capuccino,
	},
	{
		id: 'eb6fcecd-88cd-4067-8c90-6093a48f41c9',
		name: 'Macchiato',
		description:
			'Cafe expresso misturado com um pouco de leite quente e espuma',
		details: ['tradicional', 'com leite'],
		price: 10.9,
		amount: 0,
		imgSrc: macchiato,
	},
	{
		id: '32070f09-5772-4e42-b494-895fed5a7387',
		name: 'Mocaccino',
		description: 'Cafe expresso com calda de chocolate, pouco leite e espuma',
		details: ['tradicional', 'com leite'],
		price: 7.9,
		amount: 0,
		imgSrc: mocaccino,
	},
	{
		id: 'ea1feee4-f42c-4b91-8fca-7a7be582af0e',
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e cafe',
		details: ['especial', 'com leite'],
		price: 14.5,
		amount: 0,
		imgSrc: chocolateQuente,
	},
	{
		id: '1f2baa7b-7644-4094-b46f-7cd62ccc9c65',
		name: 'Cubano',
		description:
			'Drink gelado de cafe expresso com rum, creme de leite e hortela',
		details: ['especial', 'alcoolico', 'gelado'],
		price: 9.9,
		amount: 0,
		imgSrc: cubano,
	},
	{
		id: 'ce1811f9-46e4-4cf7-abaf-b79b35dae13d',
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com cafe e leite de coco',
		details: ['especial'],
		price: 11.9,
		amount: 0,
		imgSrc: havaiano,
	},
	{
		id: '36d5aa0a-c64f-4cff-88d9-030a847967c4',
		name: 'Arabe',
		description: 'Bebida preparada com graos de cafe e especiarias',
		details: ['especial'],
		price: 7.2,
		amount: 0,
		imgSrc: arabe,
	},
	{
		id: '29f78ec6-0f2b-4fc7-928c-1687689902ef',
		name: 'Irlandes',
		description: 'Bebida a base de cafe, uisque irlandes, acucar e chatilly',
		details: ['especial', 'alcoolico'],
		price: 7.9,
		amount: 0,
		imgSrc: irlandes,
	},
];
