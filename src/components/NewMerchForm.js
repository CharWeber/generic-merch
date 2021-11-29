import React from "react";
import PropTypes from 'prop-types';
import { v4} from 'uuid';
import ReusableForm from "./ReusableForm";

function NewMerchForm(props){
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      title: event.target.title.value,
      category: event.target.type.value,
      quantity: event.target.quantity.value,
      id: v4(),
      imgSRC:'https://picsum.photos/100'
    });
  }
  return(
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewMerchFormSubmission}
        buttontext={props.buttontext} />
    </React.Fragment>
  );
}

NewMerchForm.propTypes ={
  onNewMerchCreation: PropTypes.func,
  buttontext: PropTypes.string
}

export default NewMerchForm;