import React from "react";
import PropTypes from 'prop-types';

function MerchDetail(props){
  const {merch, onMerchDelete, onMerchEdit} = props;

  return (
    <React.Fragment>
      <h1>{merch.title}</h1>
      <br/>
      <p>{merch.type}</p>
      <p>{merch.quantity}</p>
      <button onClick={() => onMerchDelete(merch.id)}>Delete Merch</button>
      <button onClick={() => onMerchEdit(merch.id)}>Update Merch</button>
    </React.Fragment>
  );
}

MerchDetail.propTypes= {
  merch: PropTypes.object,
  onMerchDelete: PropTypes.func,
  onMerchEdit: PropTypes.func
}
export default MerchDetail;