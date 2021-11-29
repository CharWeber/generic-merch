import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='title'
          placeholder='Merch Name?' />
          <br/>
          <select name="category">
          <option value="Clothing">Clothing</option>
          <option value="Accesory">Accesories</option>
          <option value="Music">Music</option>
          <option value="Misc">Misc</option>
        </select>
          <br/>
        <input
          type='number'
          name='quantity'
          placeholder='how Many?' />
          <br/>
        <button type='submit' className= "btn btn-light">{props.buttontext}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttontext: PropTypes.string
};

export default ReusableForm;