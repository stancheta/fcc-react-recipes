import React from 'react';
import './RecipeDashboard.sass';
import uuid from '../node_modules/uuid/uuid.js';
import helpers from './helpers';

const RecipeForm = React.createClass({
  handleSubmitForm: function() {
    const ingredientArr = helpers.parseIngredients(this.refs.ingredients.value);
    const details = {
      id: this.props.id,
      title: this.refs.title.value,
      description: this.refs.description.value,
      ingredients: ingredientArr
    };
    this.props.onFormClose();
    this.props.onFormSubmit(details);
  },
  render: function() {
    const submitText = this.props.title ? "Update" : "Create";
    const headerText = this.props.title ? "Edit Recipe" : "New Recipe";
    const ingredients = this.props.ingredients ? this.props.ingredients.join('; ') : "";
    const phTitle = "Recipe Title";
    const phDescription = "Recipe Description";
    const phIngredients = "Enter Ingredients, separated by semicolons";

    return (
      <div className="RecipeForm">
        <div className="RecipeHeader RecipeHeaderEdit">
          {headerText}
        </div>
        <div className="RecipeBody">
          <div className="RecipeField">
            <label>TITLE</label>
            <input defaultValue={this.props.title} placeholder={phTitle} ref='title'></input>
          </div>
          <div className="RecipeField">
            <label>DESCRIPTION</label>
            <textarea defaultValue={this.props.description} placeholder={phDescription} ref='description'></textarea>
          </div>
          <div className="RecipeField">
            <label>INGREDIENTS</label>
            <textarea defaultValue={ingredients} placeholder={phIngredients} ref='ingredients'></textarea>
          </div>
          <button
            className="btn btn-default"
            onClick={this.handleSubmitForm}
          >{submitText}</button>
          <button
            className="btn btn-danger"
            onClick={this.props.onFormClose}
          >Cancel</button>
        </div>
      </div>
    );
  }
});

const ToggleableRecipeForm = React.createClass({
  getInitialState: function() {
    return {
      isOpen: false
    };
  },
  handleFormOpen: function() {
    this.setState({isOpen: true});
  },
  handleFormClose: function() {
    this.setState({isOpen: false});
  },
  render: function() {
    if(this.state.isOpen === true) {
      return (
        <RecipeForm
          onFormClose={this.handleFormClose}
          onFormSubmit={this.props.onCreateFormSubmit}
        />
      );
    } else {
      return (
        <button
          className="btn btn-lg btn-primary"
          onClick={this.handleFormOpen}
        >Add Recipe </button>
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
  handleDeleteClick: function() {
    this.props.onDeleteClick(this.props.id);
  },
  render: function() {
    if (this.props.isOpen) {
      return (
        <div className="Recipe">
          <div
            className="RecipeHeader RHToggle"
            onClick={this.props.onRecipeClose}
          >
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
            <button
              className="btn btn-default"
              onClick={this.props.onFormOpen}
            >Edit</button>
            <button
              className="btn btn-danger"
              onClick={this.handleDeleteClick}
            >Delete</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Recipe">
          <div
            className="RecipeHeader RHToggle RecipeHeader-closed"
            onClick={this.props.onRecipeOpen}
          >
            {this.props.title}
          </div>
        </div>
      );
    }
  }
});

const EditableRecipe = React.createClass({
  getInitialState: function() {
    return {
      editFormOpen: false,
      isOpen: false
    };
  },
  handleFormOpen: function() {
    this.setState({editFormOpen: true});
  },
  handleFormClose: function() {
    this.setState({editFormOpen: false});
  },
  handleRecipeOpen: function() {
    this.setState({isOpen: true});
  },
  handleRecipeClose: function() {
    this.setState({isOpen: false});
  },
  render: function() {
    if (this.state.editFormOpen) {
      return (
        <RecipeForm
          id={this.props.id}
          title={this.props.title}
          ingredients={this.props.ingredients}
          description={this.props.description}
          onFormClose={this.handleFormClose}
          onFormSubmit={this.props.onEditFormSubmit}
        />
      );
    } else {
      return (
        <OpenableRecipe
          id={this.props.id}
          title={this.props.title}
          ingredients={this.props.ingredients}
          description={this.props.description}
          onFormOpen={this.handleFormOpen}
          isOpen={this.state.isOpen}
          onRecipeOpen={this.handleRecipeOpen}
          onRecipeClose={this.handleRecipeClose}
          onDeleteClick={this.props.onDeleteClick}
        />
      );
    }
  }
});

const EditableRecipeList = React.createClass({
  render: function() {
    const recipes = this.props.recipes.map((recipe) => {
      return (
        <EditableRecipe
          title={recipe.title}
          id={recipe.id}
          key={recipe.id}
          description={recipe.description}
          ingredients={recipe.ingredients}
          isOpen={recipe.isOpen}
          onDeleteClick={this.props.onDeleteClick}
          onEditFormSubmit={this.props.onEditFormSubmit}
        />
      );
    });
    return (
      <div className="recipe-list">
        {recipes}
      </div>
    );
  }
});

const RecipeDashboard = React.createClass({
  getInitialState: function() {
    return {
      recipes: [
        {
          title: 'beef bao',
          id: uuid.v4(),
          description: 'It\'s a bao.',
          ingredients: ['1 pound of beef','3 cups of bao mix','1 flower (for garnish)'],
          isOpen: false
        },
        {
          title: 'ham sandwich',
          id: uuid.v4(),
          description: 'sudo make me a sandwich',
          ingredients: ['2 pieces of bread','1 haunch of ham','1 slice of cheese'],
          isOpen: false
        },
        {
          title: 'fried chicken',
          id: uuid.v4(),
          description: 'bawk bawk BAWK',
          ingredients: ['3 pounds chicken', '3 cups oil', 'One packet of ketchup'],
          isOpen: false
        }
    ]
    };
  },
  handleDeleteClick: function(recipeID) {
    this.deleteRecipe(recipeID);
  },
  handleEditFormSubmit: function(details) {
    this.updateRecipe(details);
  },
  handleCreateFormSubmit: function(details) {
    this.createRecipe(details);
  },
  deleteRecipe: function(recipeID) {
    this.setState({recipes: this.state.recipes.filter(r => r.id !== recipeID)});
  },
  updateRecipe: function(details) {
    this.setState({recipes: this.state.recipes.map((recipe) => {
      if (recipe.id === details.id) {
        return Object.assign({}, recipe, {
          title: details.title,
          description: details.description,
          ingredients: details.ingredients
        });
      }

      return recipe;

    })});
  },
  createRecipe: function(details) {
    const r = helpers.newRecipe(details);
    this.setState({recipes: this.state.recipes.concat(r)});
  },
  render: function() {
    return (
      <div className="RecipeDashboard">
        <EditableRecipeList
          recipes={this.state.recipes}
          onDeleteClick={this.handleDeleteClick}
          onEditFormSubmit={this.handleEditFormSubmit}
        />
        <ToggleableRecipeForm
          onCreateFormSubmit={this.handleCreateFormSubmit}
        />
      </div>
    );
  }
});

export default RecipeDashboard;
