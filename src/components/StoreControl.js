import React from "react";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";

class StoreControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      mainMerchList: [],
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }))
  }

  handleNewMerchFormSubmission = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      formVisible: false
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttontext = null;
    if (!this.state.formVisible){
      currentlyVisibleState = <MerchList mainMerchList = {this.state.mainMerchList} />
      buttontext = "Add Merch";
    }
    else if (this.state.formVisible){
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleNewMerchFormSubmission}
      buttontext = "submit" />
      buttontext = "return";
    }
    return(
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttontext}</button>
      </React.Fragment>
    );
  }
}

export default StoreControl;