import React from 'react';
import './App.css';
import Header from './components/Header';
import Tab from './components/Tab';
import Select from './components/SelectFront';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "Select your news",
    };

  }
 
  render() {
    return (
      <div className="section__hacknews">
        <Header titulo='Hacker News' />
        <div className="container">
          <Tab />
          <Select selectValue={this.state.front} />
        </div>
      </div>
    )
  }
}
 
export default App;