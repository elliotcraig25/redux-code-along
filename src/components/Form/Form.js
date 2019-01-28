import React, { Component } from "react";
import {connect} from 'react-redux';
import {addItem} from './../../ducks/reducer';

import "./Form.css";
import plus from "./../../assets/add_red.svg";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleInput(val) {
    this.setState({
      name: val
    })
  }

  render() {
    console.log(`Form props,`, this.props)
    return (
      <div className="View Form">
        <h1>Add</h1>
        <div className="input_box">
          <input
            value={this.state.name}
            onChange={e => this.handleInput(e.target.value)}
          />
          <img src={plus} alt="add" onClick={() => this.props.add(this.state.name)} />
        </div>
      </div>
    );
  }
}

//input exitsting informaiton from redux
function mapStateToProps(reduxState){
  return reduxState
}

//output new information to redux
const mapDispatchToProps = {
  add: addItem
}

const connectComp = connect(mapStateToProps, mapDispatchToProps)(Form)
export default connectComp;
