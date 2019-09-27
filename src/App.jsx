import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // https://getuikit.com/docs/width
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div className="uk-child-width-1-2@s uk-text-center" uk-grid>
        <div>
          <div className="uk-background-default uk-padding uk-panel">
            <p className="uk-h4">Default</p>
          </div>
        </div>
        <div>
          <div className="uk-background-muted uk-padding uk-panel">
            <p className="uk-h4">Muted</p>
          </div>
        </div>
        <div>
          <div className="uk-background-primary uk-light uk-padding uk-panel">
            <p className="uk-h4">Primary</p>
          </div>
        </div>
        <div>
          <div className="uk-background-secondary uk-light uk-padding uk-panel">
            <p className="uk-h4">Secondary</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
