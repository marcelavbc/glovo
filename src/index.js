const tools = require('./functions');
const apiService = require('./apiService');
const letter = 'g'.toUpperCase();

//Filter all cocktails from letter
apiService.filterCocktailsByLetter(letter)
    .then(result => {
        //Console all cocktails:
        tools.allCocktails(result, letter);
        //Keep cocktails with more than x ingredients:
        tools.moreThenNumber(result, letter);
        //List id, name and ingredients:
        tools.idNameIng(result, letter);
        //Add ingredients qtt:
        tools.idNameIngQtt(result, letter);
        //Separate list between alcoholic and non-alcoholic
        tools.getAlcholics(result, letter);
    })