import React from "react";
import PropTypes from 'prop-types';
import { v4} from 'uuid';

function NewMerchForm(props){
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      title: event.target.title.value,
      type: event.target.type.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='title'
          placeholder='Merch Name?' />
          <br/>
          <select name="type">
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
        <button type='submit'>{props.buttontext}</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes ={
  onNewMerchCreation: PropTypes.func,
  buttontext: PropTypes.string
}

export default NewMerchForm;