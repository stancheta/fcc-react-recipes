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
      (ingredient, i) => {
        return (
          <li key={this.props.id + '-' + i}>
            <input type="checkbox" />
            <label className="strikethrough">{ingredient}</label>
          </li>
        )
      }
    );
    return (
      <ul className="IngredientList">
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
              id={this.props.id}
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
          id={this.props.id}
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
          id={1}
          title={"beef bao"}
          ingredients={['1 pound of beef','3 cups of bao mix','1 flower (for garnish)']}
          description={"It's a bao"}
          editFormOpen={false}
          isOpen={false}
        />
        <EditableRecipe
          id={2}
          title={"ham sandwich"}
          ingredients={['2 slices of bread', '1 haunch of ham','1 slice of cheese']}
          description={"sudo make me a sandwich"}
          editFormOpen={false}
          isOpen={true}
        />
        <EditableRecipe
          id={3}
          title={"fried chicken"}
          ingredients={['3 pounds chicken', '3 cups oil', 'One packet of ketchup']}
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
