import React, { Component } from 'react';
// import './App.css'; <-- commented out for styling
import ConversationsList from './components/ConversationsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConversationsList cable={this.props.cable} />
      </div>
    );
  }
}

export default App;