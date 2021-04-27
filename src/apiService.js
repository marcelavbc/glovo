const axios = require('axios');
const { Cocktail } = require('./cocktail')

module.exports = { 
    filterCocktailsByLetter(letter) {
        return new Promise((resolve, reject) => {
            axios({ url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`, method: 'GET' })
                .then(resp => {
                    const drinks = resp.data.drinks;
                    let cocktails = [];

                    for (let i = 0; i < drinks.length; i++) {
                        cocktails[i] = new Cocktail(drinks[i].idDrink, drinks[i].strDrink, drinks[i].strAlcoholic);
                        cocktails[i].getIngredients([drinks[i].strIngredient1, drinks[i].strIngredient2, drinks[i].strIngredient3, drinks[i].strIngredient4, drinks[i].strIngredient5, drinks[i].strIngredient6, drinks[i].strIngredient7, drinks[i].strIngredient8, drinks[i].strIngredient9, drinks[i].strIngredient10, drinks[i].strIngredient11, drinks[i].strIngredient12, drinks[i].strIngredient13, drinks[i].strIngredient14, drinks[i].strIngredient15]);
                        cocktails[i].getIngredientsAndQtt([{ ing: drinks[i].strIngredient1, qtt: drinks[i].strMeasure1 }, { ing: drinks[i].strIngredient2, qtt: drinks[i].strMeasure2 }, { ing: drinks[i].strIngredient3, qtt: drinks[i].strMeasure3 }, { ing: drinks[i].strIngredient4, qtt: drinks[i].strMeasure4 }, { ing: drinks[i].strIngredient5, qtt: drinks[i].strMeasure5 }, { ing: drinks[i].strIngredient6, qtt: drinks[i].strMeasure6 }, { ing: drinks[i].strIngredient7, qtt: drinks[i].strMeasure7 }, { ing: drinks[i].strIngredient8, qtt: drinks[i].strMeasure8 }, { ing: drinks[i].strIngredient9, qtt: drinks[i].strMeasure9 }, { ing: drinks[i].strIngredient10, qtt: drinks[i].strMeasure10 }, { ing: drinks[i].strIngredient11, qtt: drinks[i].strMeasure11 }, { ing: drinks[i].strIngredient12, qtt: drinks[i].strMeasure12 }, { ing: drinks[i].strIngredient13, qtt: drinks[i].strMeasure13 }, { ing: drinks[i].strIngredient14, qtt: drinks[i].strMeasure14 }, { ing: drinks[i].strIngredient15, qtt: drinks[i].strMeasure15 }]);
                    }
                    if (resp) {
                        resolve(cocktails)
                    } else {
                        reject(error => console.log('Error:', error))
                    }
                })
        })
    },
}