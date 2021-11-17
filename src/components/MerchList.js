import React from "react";
import Merch from "./Merch";
import PropTypes from 'prop-types';


function MerchList(props){
  return(
    <React.Fragment>
      {props.mainMerchList.map((merch) => 
        <Merch
          whenMerchClicked = {props.OnMerchSelection}
          title={merch.title}
          type={merch.type}
          quantity={merch.quantity}
          id={merch.id}
          key={merch.id}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes ={
  mainMerchList: PropTypes.array,
  OnMerchSelection: PropTypes.func
}


export default MerchList;