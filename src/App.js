import './App.css';
import Header from './components/Header';
import Select from './components/SelectFront';
import React from 'react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "Select your news",
    };
 
   console.log("APP: " + this.state.front)
 
 
  }
 
  render() {
    return (
      <div className="section__hacknews">
        <Header titulo='Hacker News' />
        <div className="container">
          <Select selectValue={this.state.front} />
        </div>
      </div>
    )
  }
}
 
export default App;