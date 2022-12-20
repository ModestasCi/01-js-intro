console.clear();

const valiuta = "EUR";
const prekes = [
	{
		name: "Bananas",
		price: 2,
		inStock: 10,
	},
	{
		name: "Agurkas",
		price: 3,
		inStock: 10,
	},
	{
		name: "Pomidoras",
		price: 1.57,
		inStock: 30,
	},
	{
		name: "Arbuzas",
		price: 1,
		inStock: 0,
	},
];

function shop(products, currency) {
	console.log("Musu parduotuve:");
	console.log("----------------");
	let fullPrice = 0;
	for (let i = 0; i < products.length; i++) {
		console.log(
			`${i + 1}) ${products[i].name} kainuoja ${
				products[i].price
			} ${currency} ir turime ju ${products[i].inStock} vienetu`
		);
		fullPrice += products[i].price * products[i].inStock;
	}
	console.log("----------------");
	console.log(`Viso asortimento kaina: ${fullPrice} ${currency}`);
}

shop(prekes, valiuta);

// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.
