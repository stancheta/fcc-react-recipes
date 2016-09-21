import React from 'react';
import './RecipeDashboard.sass';

const RecipeForm = React.createClass({
  render: function() {
    return (
      <div className="">

      </div>
    );
  }
});

const ToggleableRecipeForm = React.createClass({
  render: function() {
    if(this.props.isOpen) {
      return (
        <div className="">
        </div>
      );
    } else {
      return (
        <button className="btn btn-lg btn-primary">Add Recipe </button>
      );
    }
  }
});

const RecipeIngredientList = React.createClass({
  render: function() {
    const ingredientList = this.props.ingredients.map(
      (ingredient) => {
        return (
          <li>
          {ingredient.ingredient}
          <span className="amount">{ingredient.amount}</span>
          </li>
        )
      }
    );
    return (
      <ul className="ingredients">
        {ingredientList}
      </ul>
    );
  }
});

const OpenableRecipe = React.createClass({
  render: function() {
    if (this.props.isOpen) {
      return (
        <div className="Recipe">
          <div className="RecipeHeader">
            {this.props.title}
          </div>
          <div className="RecipeBody">
            <p className="description">
              <em>{this.props.description}</em>
            </p>
            <strong>Ingredients</strong>
            <hr/>
            <RecipeIngredientList
              ingredients={this.props.ingredients}
            />
            <button className="btn btn-default">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Recipe">
          <div className="RecipeHeader RecipeHeader-closed">
            {this.props.title}
          </div>
        </div>
      );
    }
  }
});

const EditableRecipe = React.createClass({
  render: function() {
    if (this.props.editFormOpen) {
      return (
        <RecipeForm

        />
      );
    } else {
      return (
        <OpenableRecipe
          title={this.props.title}
          ingredients={this.props.ingredients}
          description={this.props.description}
          isOpen={this.props.isOpen}
        />
      );
    }
  }
});

const EditableRecipeList = React.createClass({
  render: function() {
    return (
      <div className="recipe-list">
        <EditableRecipe
          title={"beef bao"}
          ingredients={[{ingredient:'beef', amount:'1 pound'}, {ingredient:'bao mix', amount:'3 gallons'}, {ingredient:'flower', amount:'1 (for garnish)'}]}
          description={"It's a bao"}
          editFormOpen={false}
          isOpen={false}
        />
        <EditableRecipe
          title={"ham sandwich"}
          ingredients={[{ingredient:'bread', amount:'2 slices'}, {ingredient:'ham', amount:'1 haunch'}, {ingredient:'cheese', amount:'1 slice'}]}
          description={"sudo make me a sandwich"}
          editFormOpen={false}
          isOpen={true}
        />
        <EditableRecipe
          title={"fried chicken"}
          ingredients={[{ingredient:'chicken', amount:'3 lbs.'}, {ingredient:'oil', amount:'3 cups'}, {ingredient:'ketchup', amount:'1 packet'}]}
          description={"bawk bawk BAWK"}
          editFormOpen={true}
        />
      </div>
    );
  }
});

const RecipeDashboard = React.createClass({
  render: function() {
    return (
      <div className="RecipeDashboard">
        <EditableRecipeList />
        <ToggleableRecipeForm
          isOpen={false}
        />
      </div>
    );
  }
});

export default RecipeDashboard;
