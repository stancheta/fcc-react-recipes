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
        <button className="btn btn-primary">Add Recipe </button>
      );
    }
  }
});

const CloseableRecipe = React.createClass({
  render: function() {
    if (this.props.isOpen) {
      return (
        <div className="">

        </div>
      );
    } else {
      return (
        <div className="">

        </div>
      );
    }
  }
});

const EditableRecipe = React.createClass({
  render: function() {
    if (this.props.EditFormOpen) {
      return (
        <div className="">

        </div>
      );
    } else {
      return (
        <div className="">

        </div>
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
        />
        <EditableRecipe
          title={"fried chicken"}
          ingredients={[{ingredient:'chicken', amount:'3 lbs.'}, {ingredient:'oil', amount:'3 cups'}, {ingredient:'ketchup', amount:'1 packet'}]}
          description={"bawk bawk BAWK"}
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
