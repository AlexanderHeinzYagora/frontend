import React, {useState, useEffect}  from "react";


//const [bla, setName] = useState([""]);


class NameForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {    this.setState({value: event.target.value});  }
    
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      this.setState({value : event.taget.value})
      //setName(this.state.value)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>        <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
          <input type="submit" value="Submit" />
          Bla this is your name: {this.state.value}
        </form>

      );
    }
  }
export default NameForm