import React from "react";

function RestockForm(props){
  return(
    <React.Fragment>
      <form onSubmit={props.formHandler}>
        <input
          type='number'
          name='qty'
          placeholder='How Many?' />
          <br/>
        <button type='submit'>Restock</button>
      </form>
    </React.Fragment>
  );
}


RestockForm.propTypes = {

}
export default RestockForm