class Cocktail {
    constructor(id, name, alcoholic) {
        this.id = id;
        this.name = name;
        this.alcoholic = alcoholic;
        this.ingredients = [];
        this.ingredientsQtt = [];
    }

    getIngredients(ingredients) {
        ingredients.forEach(element => {
            if (element !== null && element !== '') {
                this.ingredients.push(element);
            }
        })
    }

    getIngredientsAndQtt(ingredients) {
        ingredients.forEach(element => {
            if (element.ing !== null && element.ing !== '') {
                this.ingredientsQtt.push({ ingredient: element.ing, qtt: element.qtt });
            }
        })
    };
}

module.exports = { Cocktail };