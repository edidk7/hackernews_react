import React from 'react'
import NewsPage from '../NewsPage';
 
const options = [
    { label: 'Select your news' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' }
]
 
 
class SelectFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "Select your news"
    };
 
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(e) {
    console.log("front Selected: " + e.target.value);
    this.setState({ front: e.target.value });
 
  }
 
  render(){
    return (
      <div id="SelectFront">
        <div className="select-container">
          <select className='select__front' value={this.state.front} onChange={this.handleChange} >
            {options.map((option) => (
              <option key={option.id} value={option.value} >{option.label}</option>
            ))}
          </select>
        </div>
        <NewsPage selectValue={this.state.front} />
      </div>
    );
  }
}
 
export default SelectFront