import React from "react";
import PropTypes from 'prop-types'

function Merch(props){
  return(
    <React.Fragment>
      <h3>{props.title}</h3>
      <hr/>
      <p>{props.type}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  );
}

Merch.propTypes ={
  title: PropTypes.string,
  type: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string
}

export default Merch;