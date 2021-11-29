import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditMerch(props){
  const { merch } = props;
  function handleEditTicketFormSubmission(e){
    e.preventDefault();
    props.onEditMerch({
      title: e.target.title.value,
      category: e.target.category.value,
      quantity: e.target.quantity.value,
      id: merch.id})
  }


  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttontext="Update Ticket" />
    </React.Fragment>
  );
}

EditMerch.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerch;