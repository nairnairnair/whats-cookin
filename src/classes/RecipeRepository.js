class RecipeRepository {
 constructor(recipeData) {
   this.recipeData = recipeData;
 }

  listRecipeTags(tag) {
    const filteredByTag = this.recipeData.filter(recipe => 
      recipe.tags.includes(tag)
      );
      return filteredByTag;
  }

  listRecipeNames(name) {
  const filteredByName = this.recipeData.filter(recipe => 
    recipe.name.includes(name)
    );
    return filteredByName;
  }
}

export default RecipeRepository;
