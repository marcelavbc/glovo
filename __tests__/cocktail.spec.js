const { Cocktail } = require('../src/cocktail')

describe("Create Cocktail", () => {
    test("it should create a cocktail", () => {
        const theCocktail = new Cocktail(1, "Cosmopolitan", "alcoholic");
        expect(theCocktail).toEqual({ id: 1, name: "Cosmopolitan", alcoholic: "alcoholic", ingredients: [], ingredientsQtt: [] })
    });
});