import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class CounterApp extends Component {
  // constructor(props){
  //   super(props);  

    state = {
      counter: 0
    // };
    
    // this.handleIncrement = this.handleIncrement.bind(this);
    // this.handleDecrement = this.handleDecrement.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }
  

  handleIncrement(){
    this.setState({counter:this.state.counter+1});
  }

  handleDecrement(){
    this.setState({counter:this.state.counter-1});
  }
  handleReset(){
    this.setState({counter:0});
  }

  render() {
    return (
      <React.Fragment>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h1 className="display-3">{this.state.counter}</h1>
        </div>
        <div className="btn-group panel-body">
          <button onClick={this.handleIncrement.bind(this)} className= "btn btn-success btn-lg"> + </button>
          <button onClick={this.handleReset.bind(this) } className= "btn btn-warning btn-lg"> reset </button>
          <button onClick={this.handleDecrement.bind(this)} className= "btn btn-danger btn-lg"> - </button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default CounterApp;
