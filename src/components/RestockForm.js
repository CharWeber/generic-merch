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
        <button type='submit' className= "btn btn-light">Restock</button>
      </form>
    </React.Fragment>
  );
}



export default RestockForm