const ingredientName = document.getElementById("ingredient");
const ingredientQuantity = document.getElementById("quantity");
const unitToConvert = document.getElementById("unit");
const numberOfServings = document.getElementById("servings");
const recipeForm = document.getElementById("recipe-form");
const resultList = document.getElementById("result-list");


const conversionTable = {
    cup: {gram: 240, ounce: 8.0, teaspoon: 48},
    gram: {cup: 1/240, ounce: 0.0353, teaspoon: 0.2},
    ounce: {cup: 0.125, gram: 28.35, teaspoon: 6},
    teaspoon: {cup: 1/48, gram: 5, ounce: 0.167}
};

const convertQuantity = (fromUnit) => (toUnit) =>  (quantity) => {
    return conversionTable[fromUnit][toUnit] * quantity;
}

const adjustForServings = (baseQuantity) => (newServings) => {
    return baseQuantity * newServings;
}

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings) => {
    const adjustedServings = adjustForServings(baseQuantity)(newServings);
    const converted = convertQuantity(baseUnit)(newUnit)(adjustedServings);
    return converted.toFixed(2).toString();
}

const units = ["cup", "gram", "ounce", "teaspoon"];

const updateResultsList = () => {
    resultList.innerHTML = "";  
    units.forEach(unit => {
        if(unit != unitToConvert.value){
            const value = processIngredient(ingredientQuantity.value, unitToConvert.value, unit, numberOfServings.value);
            const li = document.createElement("li");
            li.textContent = `${ingredientName.value}: ${value} ${unit}`;
            resultList.appendChild(li);
        }
    })  
}

recipeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateResultsList();
});
