import React from "react";
import PropTypes from 'prop-types';
import RestockForm from "./RestockForm";

function MerchDetail(props){
  const {merch, onMerchDelete, onMerchEdit, onMerchBuy} = props;
  let currentVisibleState = null;

  function handleRestockForm(e){
    e.preventDefault();
    props.onMerchRestock(merch.id, parseInt(e.target.qty.value))
  }

  if (merch.quantity <=0){
    currentVisibleState = 
    <React.Fragment>
      <h1>{merch.title}</h1>
      <br/>
      <p>{merch.type}</p>
      <p>OUT OF STOCK</p>
      <button onClick={() => onMerchDelete(merch.id)}>Delete Merch</button>
      <button onClick={() => onMerchEdit(merch.id)}>Update Merch</button>
      <RestockForm formHandler={handleRestockForm}/>
    </React.Fragment>
  }else{
    currentVisibleState = 
    <React.Fragment>
      <h1>{merch.title}</h1>
      <br/>
      <p>{merch.type}</p>
      <p>{merch.quantity}</p>
      <button onClick={() => onMerchDelete(merch.id)}>Delete Merch</button>
      <button onClick={() => onMerchEdit(merch.id)}>Update Merch</button>
      <button onClick={() => onMerchBuy(merch.id)}>Buy Merch</button>
    </React.Fragment>
  }
  return (
    <React.Fragment>
      {currentVisibleState}
    </React.Fragment>
  );
}

MerchDetail.propTypes= {
  merch: PropTypes.object,
  onMerchDelete: PropTypes.func,
  onMerchEdit: PropTypes.func,
  onMerchBuy: PropTypes.func,
  onMerchRestock: PropTypes.func,
}
export default MerchDetail;