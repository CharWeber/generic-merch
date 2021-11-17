import React from "react";
import Merch from "./Merch";
import PropTypes from 'prop-types';


function MerchList(props){
  return(
    <React.Fragment>
      {props.mainMerchList.map((merch) => 
        <Merch
          title={merch.title}
          type={merch.type}
          quantity={merch.quantity}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes ={
  mainMerchList: PropTypes.array
}


export default MerchList;