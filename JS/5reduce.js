const cart = [
	{
		item: "phone",
		type: "samsung",
		model: "Galaxy s7",
		price: 599.4,
		amount: 2,
	},
	{
		item: "phone",
		type: "iphone",
		model: "iphone7",
		price: 489.4,
		amount: 5,
	},
	{
		item: "phone",
		type: "samsung",
		model: "Galaxy s9",
		price: 1599.4,
		amount: 3,
	},
	{
		item: "phone",
		type: "huawei",
		model: "Mate9",
		price: 399.4,
		amount: 6,
	},
];

// let total = cart.reduce(

let {totalItems, cartTotal} = cart.reduce(
	(total, cartItem) => {
		// console.log(cartItem)
		const { amount, price } = cartItem;
		// count items
		total.totalItems += amount;

		// sum of prices of items
		total.cartTotal += amount * price;
		return total;
	},
	{
		totalItems: 0,
		cartTotal: 0,
	}
);
cartTotal = parseFloat(cartTotal.toFixed(2))

console.log(totalItems, cartTotal);
