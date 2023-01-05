class Shop { /** individualios parduotuves info. kiekviena parduotuve turi atskira savo info(pavadinima,valiuta,prekes ir t.t.) */
    constructor(name, currency) { /** 1.sukuriu sugalvotus name ir currency */
        this.name = name;
        this.currency = currency;
        this.products = []; /** 11. sugalvotas naujas */
    }

    intro() { /**2.terminal nesupranta kas intro (not a function) */
        const res = `Hi, we are "${this.name}".\nUse .items() method to get list of items to purchase.\nUse .order() method to get your order details.`; /** 3. vietoj const res = buvo retur 'tekstas pries'. /n <-enter sintakse. Pavadinimas issaukiamas ${this.name} */

        console.log(res);
        return res;
    }
    formattedPrice(price) { /**5.formatedPrice<--sukurtas pavadinimas*/
        return `${(price / 100).toFixed(2)} ${this.currency}`; /** toFixed(2)<-parasyti skaiciu kaip teksta su 2 skaiciais po kablelio*/
    }

    formattedName(name) { /**16. */
        return name[0].toUpperCase() + name.slice(1);
    }

    addItem(product, price) { /*4. terminalas nemato addItem. cia pridedam produktu info */
        this.products.push({
            name: product, /**cia product yra profukto pavadinimas */
            price: price,
        });

        // const formattedPrice = (price / 100).toFixed(2); nebereikia gale
        const res = `"${this.name}" sells ${product} for ${this.formattedPrice(price)} now!`; /** */
        console.log(res);
        return res;
    }

    items() { /**6. terminalas nemato items */
        const title = `Items for sale at "${this.name}":`; /**9. title, sugalvotas pirmos eilutes pavadinimas  */
        const line = `====================`; /** 7. su siom 4 eilutem suformuoja dinamini sarasa/list */
        let list = ''; /** const list ='LIST' */
        let i = 0; /**13.padaro sarasiuka */

        for (const { name, price } of this.products) { /**20. destrukturizavimas 19 su {name,price}. 12. paimtas produktas is produktu saraso*/
            // const formattedPrice = (product.price / 100).toFixed(2); nereikalingas gale
            // const formattedName = product.name[0].toUpperCase() + product.name.slice(1); /**gale nebereikia 14. paimama produkto pirma raide ir padaro didziaja*/
            // const name = product.name; /**17. */
            // const price = product.price; /** 18. */
            // const { name, price } = product; /** 19. destrukturizavimas 17 ir 18 kartu */
            list += `${++i}) ${this.formattedName(name)} - ${this.formattedPrice(price)};\n`; /** 15.prie list kiekviena kart pridet */
        }

        const res = `${title}\n${line}\n${list}${line}`; /**10.isspausdina vietoj=title+line+list+line;*/

        console.log(res);/** 8. */
        return res;
    }
}

export { Shop }