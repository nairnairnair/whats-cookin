import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import User from '../src/classes/User'

describe('Pantry', () => {

      let usersData;
      let user;
      let usersData2;
      let user2;
      let recipeData;
      let pantry;
      let pantry2;
      let ingredientsData;

    beforeEach( () => {
    usersData =
    {
      "name": "Saige O'Kon",
      "id": 1,
      "pantry": [
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1082047,
          "amount": 10
        },
        {
          "ingredient": 20082,
          "amount": 5
        }
      ]
    }

    usersData2 =
    {
      "name": "Ephraim Goyette",
      "id": 2,
      "pantry": [
        {
          "ingredient": 6150,
          "amount": 3
        },
        {
          "ingredient": 1032009,
          "amount": 7
        },
        {
          "ingredient": 1082047,
          "amount": 8
        },
        {
          "ingredient": 1034053,
          "amount": 6
        },
        {
          "ingredient": 2050,
          "amount": 10
        },
        {
          "ingredient": 19335,
          "amount": 13
        },
        {
          "ingredient": 1145,
          "amount": 5
        },
        {
          "ingredient": 18371,
          "amount": 8
        },
        {
          "ingredient": 19336,
          "amount": 4
        },
        {
          "ingredient": 11215,
          "amount": 12
        },
        {
          "ingredient": 9152,
          "amount": 3
        },
        {
          "ingredient": 11297,
          "amount": 4
        },
        {
          "ingredient": 1123,
          "amount": 17
        },
        {
          "ingredient": 16112,
          "amount": 2
        },
        {
          "ingredient": 4053,
          "amount": 11
        },
        {
          "ingredient": 10011693,
          "amount": 4
        },
        {
          "ingredient": 5114,
          "amount": 2
        },
        {
          "ingredient": 11529,
          "amount": 5
        },
        {
          "ingredient": 1001,
          "amount": 14
        },
        {
          "ingredient": 2027,
          "amount": 6
        },
        {
          "ingredient": 1002030,
          "amount": 9
        },
        {
          "ingredient": 20081,
          "amount": 10
        },
        {
          "ingredient": 1077,
          "amount": 5
        },
        {
          "ingredient": 14106,
          "amount": 7
        },
        {
          "ingredient": 2009,
          "amount": 5
        },
        {
          "ingredient": 16124,
          "amount": 4
        },
        {
          "ingredient": 2031,
          "amount": 3
        },
        {
          "ingredient": 2025,
          "amount": 5
        },
        {
          "ingredient": 11282,
          "amount": 8
        },
        {
          "ingredient": 20027,
          "amount": 2
        },
        {
          "ingredient": 11333,
          "amount": 3
        },
        {
          "ingredient": 19177,
          "amount": 2
        },
        {
          "ingredient": 11821,
          "amount": 3
        },
        {
          "ingredient": 18372,
          "amount": 9
        },
        {
          "ingredient": 1012047,
          "amount": 2
        },
        {
          "ingredient": 11291,
          "amount": 2
        },
        {
          "ingredient": 1102047,
          "amount": 4
        },
        {
          "ingredient": 6194,
          "amount": 5
        },
        {
          "ingredient": 19296,
          "amount": 5
        },
        {
          "ingredient": 11477,
          "amount": 3
        },
        {
          "ingredient": 2047,
          "amount": 12
        },
        {
          "ingredient": 93607,
          "amount": 6
        },
        {
          "ingredient": 12061,
          "amount": 8
        },
        {
          "ingredient": 11353,
          "amount": 3
        },
        {
          "ingredient": 6615,
          "amount": 2
        },
        {
          "ingredient": 9003,
          "amount": 2
        },
        {
          "ingredient": 19911,
          "amount": 2
        },
        {
          "ingredient": 1124,
          "amount": 3
        },
        {
          "ingredient": 11165,
          "amount": 2
        },
        {
          "ingredient": 1125,
          "amount": 3
        },
        {
          "ingredient": 1089003,
          "amount": 2
        },
        {
          "ingredient": 12120,
          "amount": 2
        },
        {
          "ingredient": 10511282,
          "amount": 2
        },
        {
          "ingredient": 1019,
          "amount": 2
        },
        {
          "ingredient": 9302,
          "amount": 2
        },
        {
          "ingredient": 1011256,
          "amount": 2
        },
        {
          "ingredient": 9019,
          "amount": 4
        },
        {
          "ingredient": 11206,
          "amount": 2
        },
        {
          "ingredient": 19350,
          "amount": 2
        },
        {
          "ingredient": 9099,
          "amount": 18
        },
        {
          "ingredient": 14412,
          "amount": 3
        }
      ]
    }

    recipeData = [
    {
    "id": 595736,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 11297,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
    ],
    "name": "Dirty Steve's Original Wing Sauce",
    "tags": [
      "sauce"
    ]
    },

    {
    "id": 593432,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
    ],
    "name": "Dirty Pete's Original Wing Powder",
    "tags": [
      "sauce"
    ]
    }
    ]

    ingredientsData = [
    {
      "id": 11297,
      "name": "flat leaf parsley leaves",
      "estimatedCostInCents": 1030
    },
    {
      "id": 1082047,
      "name": "kosher salt",
      "estimatedCostInCents": 972
    },
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 6150,
      "name": "bar b que sauce",
      "estimatedCostInCents": 966
    },
    {
      "id": 1032009,
      "name": "dried red chili",
      "estimatedCostInCents": 1015
    },
    ]

    user = new User(usersData);
    user2 = new User(usersData2);
    pantry = new Pantry(user);
    pantry2 = new Pantry(user2);
    });

      it('should be a function', function() {
        expect(Pantry).to.be.a('function');
      })

      it('should be able to show a user what ingredients and amounts exist inside their pantry', function() {
        const values = `
        flat leaf parsley leaves: 4,
        kosher salt: 10`
        expect(pantry.returnIngredientNamesAndAmounts()).to.equal(values);
      })

      it('should tell the user if they can cook a recipe based on ingredients in the pantry. If not, it tells the user what ingredients are missing', function() {
        const response = pantry.returnIfRecipeIsCookable(recipeData[0])
        const response2 = pantry.returnIfRecipeIsCookable(recipeData[1])
        expect(response).to.equal("Yes! You can cook this recipe")
        expect(response2).to.equal("Sorry! You don't have enough ingredients to cook Dirty Pete's Original Wing Powder. you need: wheat flour: 1.5.")
      })
})
