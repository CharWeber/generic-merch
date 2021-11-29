import React from "react";
import Merch from "./Merch";
import PropTypes from 'prop-types';


function MerchList(props){
  return(
    <React.Fragment>
      {Object.values(props.mainMerchList).map((merch) => 
        <Merch
          whenMerchClicked = {props.OnMerchSelection}
          title={merch.title}
          category={merch.category}
          quantity={merch.quantity}
          id={merch.id}
          key={merch.id}
          imgSRC={merch.imgSRC}
        />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes ={
  mainMerchList: PropTypes.object,
  OnMerchSelection: PropTypes.func
}


export default MerchList;