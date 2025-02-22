import ingredientsData from '../data/ingredients'
import recipeData from '../data/recipes'

class Pantry {
  constructor(user) {
    this.name = user.name;
    this.id = user.id;
    this.pantry = user.pantry;
    this.recipesToCook = user.recipesToCook;
  }

  returnIngredientNamesAndAmounts() {
  const test = this.pantry.reduce((acc, item) => {
    let currentIngredient = item.ingredient;
    ingredientsData.forEach(ingredient => {
    if (ingredient.id === currentIngredient) {
      acc.push(`
        ${ingredient.name}: ${item.amount}`)
      }
    })
    return acc;
    }, [])
  return test.join('');
  }

  returnIfRecipeIsCookable(recipe) {
    const isCookable = recipe.ingredients.reduce((arr, ingredient) => {
      this.pantry.forEach(item => {
        if (ingredient.id === item.ingredient && ingredient.quantity.amount <= item.amount) {
          arr.push(ingredient);
        }
      })
      return arr
    }, [])

    const neededIngredients = recipe.ingredients.filter(ingredient => !isCookable.includes(ingredient));
    const sumNeededIngredients = neededIngredients.reduce((arr, ingredient) => {
      let sumNeeded = 0
      if (!this.pantry.includes(ingredient)) {
        arr.push(ingredient.quantity.amount)
      }
      this.pantry.forEach((item) => {
        if (ingredient.id === item.ingredient) {
          sumNeeded = ingredient.quantity.amount - item.amount;
          arr.push(sumNeeded)
        }
      })
      return arr
    }, [])

    const neededIngredientNames = neededIngredients.reduce((arr,ingredient) => {
      ingredientsData.forEach(item => {
        if (item.id === ingredient.id) {
          arr.push(item.name)
        }
      })
      return arr
    }, [])

    let formattedNameAndSum = neededIngredientNames.map((name, index) => {
      return `${name}: ${sumNeededIngredients[index]}`
    })

    if (isCookable.length === recipe.ingredients.length) {
      return `Yes! You can cook this recipe`;
    } else {
      return `Sorry! You don't have enough ingredients to cook ${recipe.name}. You need: \n ${formattedNameAndSum.join("\n")}.`;
    }
  }



}

export default Pantry;
