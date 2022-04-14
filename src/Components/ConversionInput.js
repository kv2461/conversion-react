import React from "react";



export default class ConversionInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        clicked:false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    handleClick(event) {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange= {this.handleChange} handleClick={this.handleClick} className={this.state.clicked?"clicked":"notclicked"}/>
        <GetInput input={this.state.inputValue*2} handleChange= {this.handleChange} handleClick={this.handleClick}/>
        <RenderInput input={this.state.inputValue}/>
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <span>$</span>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };