import React from 'react'

const options = [
    { value: 0, label: 'Select your news' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' }
]


class SelectFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "angular",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("front Selected!!");
    this.setState({ front: e.target.value });
  }

  render(){
    return (
      <div id="SelectFront">
        <div className="select-container">
          <select className='select__front' value={this.state.fruit} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value} >{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SelectFront