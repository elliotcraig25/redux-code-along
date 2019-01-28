import React from "react";
import {connect}  from 'react-redux';
import {removeItem} from './../../ducks/reducer';

import trash from "./../../assets/waste_bin_red.svg";
import "./List.css";

function List(props) {
  console.log(`List props,`, props.list);
  // let tempList = [];
  let list = props.list.map((item, i) => {
    return (
      <div className="list_item" key={item}>
        <img src={trash} alt="delete" onClick={()=>props.removeItem(i)} />
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div className="View List">
      <h1>List</h1>
      <div className="list_box">
      {list}
      </div>
    </div>
  );
}

function mapStateProps(reduxState){
  return {
    list: reduxState.list
  }
}

const mapDispatchToProps = {
  removeItem
  //removeItem: removeItem
}

const connectedComponent = connect(mapStateProps, mapDispatchToProps)(List)

export default connectedComponent;

//export default connect(mapStateProps, mapDispatchToProps)(List)
