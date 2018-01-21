import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mdtext: '**Markdown is awesome!**'
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown (event) {
    this.setState({ mdtext: event.target.value });
  }

  render () {
    return (
      <div className="App">
        <div class="container">
          <div class="editor">
            <textarea rows="10" cols="20" value={this.state.mdtext} onChange={this.updateMarkdown} />
          </div>
          <div class="output">
            <Markdown source={this.state.mdtext} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
