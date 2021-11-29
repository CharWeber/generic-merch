import React from "react";
import PropTypes from 'prop-types'

function Merch(props){
  let MerchStyles= {};
  let img = props.imgSRC;
  let imgStyle = {
    float: 'left'
  }
  let WarningStyle = {
    color: 'red'
  };
  let Visible = null;

  if (props.type === 'Clothing'){
    MerchStyles = {
      margin: '10px',
      padding: '5px',
      backgroundColor: '#DAFFA0',
      fontFamily: 'sans-serif',
      borderColor: 'black',
    }
  }else if (props.type === 'Music'){
    MerchStyles = {
      margin: '10px',
      padding: '5px',
      backgroundColor: '#ffb1A0',
      fontFamily: 'sans-serif',
      borderColor: 'black',
    }
  }else if (props.type === 'Accesory'){
    MerchStyles = {
      margin: '10px',
      padding: '5px',
      backgroundColor: '#A0FFCD',
      fontFamily: 'sans-serif',
      borderColor: 'black',
    }
  }else {
    MerchStyles = {
      margin: '10px',
      padding: '5px',
      backgroundColor: '#D9A0FF',
      fontFamily: 'sans-serif',
      borderColor: 'black',
    }
  }

  if (props.quantity <= 0){
    Visible =     
    <React.Fragment>
    <div onClick = {() => props.whenMerchClicked(props.id)}>
      <div style={MerchStyles}>
        <img style={imgStyle} src={img} alt="placeholder img"/>
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.category}</p>
        <p style={WarningStyle}>OUT OF STOCK</p>
      </div>
    </div>
  </React.Fragment>
  }else{
    Visible = 
    <React.Fragment>
    <div onClick = {() => props.whenMerchClicked(props.id)}>
      <div style={MerchStyles}>
      <img style={imgStyle} src={img} alt="placeholder img"/>
        <h3>{props.title}</h3>
        <hr/>
        <p>{props.category}</p>
        <p>in Stock: {props.quantity}</p>
      </div>
    </div>
  </React.Fragment>
  }
  console.log(props);
  return(
    <React.Fragment>
      {Visible}
      
    </React.Fragment>
  );
}

Merch.propTypes ={
  whenMerchClicked: PropTypes.func,
  title: PropTypes.string,
  category: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  key: PropTypes.string,
  imgSRC: PropTypes.string
}

export default Merch;