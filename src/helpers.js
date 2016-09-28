import uuid from '../node_modules/uuid/uuid.js';

module.exports = {
  newRecipe: function(details = {}) {
    return {
      title: details.title || 'Recipe Title',
      id: uuid.v4(),
      description: details.description || 'Recipe Description',
      ingredients: details.ingredients || ['Recipe Ingredient'],
      isOpen: false
    };
  },
  parseIngredients: function(ingredientString) {
    return ingredientString.split(';').map(i => {
      return i.trim()
    });
  }
}
