// Window.helpers = (function() {

module.exports = {
  parseIngredients: function(ingredientString) {
    return ingredientString.split(';').map(i => {
      return i.trim()
    });
  }
}

  // return {
  //   parseIngredients
  // }
// }());
