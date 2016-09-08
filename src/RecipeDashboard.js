import React, { Component } from 'react';
import './RecipeDashboard.sass';

class RecipeDashboard extends Component {
  render() {
    return (
      <div className="RecipeDashboard">
        <div className="RecipeDashboard-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="RecipeDashboard-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default RecipeDashboard;
