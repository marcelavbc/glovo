const numberOfIngredients = 4

module.exports = { 
    allCocktails(array, letter) {
        console.log('Total:', array.length);
        let result = [];
        array.forEach(cocktail => result.push(cocktail.name))
        console.log(`Coktails beginnig with ${letter}`);
        console.log(result.join(', '))
        console.log("\n");
    },
    filterByNumberOfIngredients(array, value) {
        const filteredArray = array.filter(element => element.ingredients.length > value);
        return filteredArray;
    },
    moreThenNumber(array, letter) {
        const filtered = this.filterByNumberOfIngredients(array, numberOfIngredients)
        console.log(`Cocktails beginnig with ${letter} and with more than ${numberOfIngredients} ingredients:`)
        filtered.forEach(element => console.log(element.name));
        console.log("\n");
    },
    idNameIng(array, letter) {
        const filtered = this.filterByNumberOfIngredients(array, numberOfIngredients)
        console.log(`Cocktails beginnig with ${letter} and with more than ${numberOfIngredients} ingredients. Only id, name and ingredients:`);
        filtered.forEach(element => console.log({ name: element.name, id: element.id, ingredients: element.ingredients }));
        console.log("\n");
    },
    idNameIngQtt(array, letter) {
        const filtered = this.filterByNumberOfIngredients(array, numberOfIngredients)
        console.log(`Cocktails beginnig with ${letter} and with more than ${numberOfIngredients} ingredients. Id, name, ingredients and quantity:`);
        filtered.forEach(element => console.log({ name: element.name, id: element.id, ingredientsQtt: element.ingredientsQtt }));
        console.log("\n");
    },
    getAlcholics(array, letter) {
        const alcoholic = [];
        const optAlcoholic = [];
        const nonAlcoholic = [];
        const filtered = this.filterByNumberOfIngredients(array, numberOfIngredients)

        for (let i = 0; i < filtered.length; i++) {
            if (filtered[i].alcoholic === 'Alcoholic') {
                alcoholic.push(filtered[i]);
            } else if (filtered[i].alcoholic === 'Non alcoholic') {
                nonAlcoholic.push(filtered[i]);
            } else {
                optAlcoholic.push(filtered[i]);
            }
        }


        if (alcoholic.length > 0) {
            console.log(`Alcoholic cocktails beginnig with ${letter} and with more then ${numberOfIngredients} ingredients:`);
            alcoholic.forEach(drink => console.log(drink.name))
        } else {
            console.log(`Sorry, there is any alcoholic cocktail beginnig with ${letter} with more then ${numberOfIngredients} ingredients...`);
        }

        console.log("\n");

        if (nonAlcoholic.length > 0) {
            console.log(`Non-alcoholic cocktails beginnig with ${letter} and with more then ${numberOfIngredients} ingredients:`);
            nonAlcoholic.forEach(drink => console.log(drink.name));
        } else {
            console.log(`Sorry, there is any non-alcoholic cocktail beginnig with ${letter} with more then ${numberOfIngredients} ingredients...`);
        }

        console.log("\n");

        if (optAlcoholic.length > 0) {
            console.log(`Optional alcohol cocktails beginnig with ${letter} and with more then ${numberOfIngredients} ingredients:`);
            optAlcoholic.forEach(drink => console.log(drink.name));
        } else {
            console.log(`Sorry, there is any optional alcohol cocktail beginnig with ${letter} with more then ${numberOfIngredients} ingredients...`);
        }
        console.log("\n");
    },

}





