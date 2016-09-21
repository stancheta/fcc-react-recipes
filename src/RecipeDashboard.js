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

const OpenableRecipe = React.createClass({
  render: function() {
    const header = (
      <div className="RecipeHeader">
        {this.props.title}
      </div>
    )

    if (this.props.isOpen) {
      return (
        <div className="">
        {header}
        </div>
      );
    } else {
      return (
        <div className="">
          {header}
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
