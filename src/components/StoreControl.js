import React from "react";
import MerchDetail from "./MerchDetail";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";
import EditMerch from "./EditMerch";

class StoreControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisible: false,
      mainMerchList: [],
      selectedMerch: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedMerch != null){
      this.setState({selectedMerch: null, editing: false})
    }
    else{
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
        selectedMerch: null,
        editing: false
      }))
    }
  }

  handleNewMerchFormSubmission = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      formVisible: false
    })
  }
  
  handleChangingSelectedMerch = (id) => {
    const newSelectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: newSelectedMerch});
  }

  handleDeleteMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null
    })
  }

  handleEditMerch = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
    .filter(merch => merch.id !== this.state.selectedMerch.id)
    .concat(merchToEdit);
    this.setState({
      mainMerchList: editedMainMerchList,
      editing: false,
      selectedMerch: null
  });
  }
  handleEdit = ()=>{
    this.setState({editing: true})
  }

  render(){
    let currentlyVisibleState = null;
    let buttontext = null;
    if (this.state.editing){
      currentlyVisibleState = <EditMerch  
      merch={this.state.selectedMerch}
      onEditMerch={this.handleEditMerch}
      />
      buttontext = "Return"
    }else if (this.state.selectedMerch != null){
      currentlyVisibleState = <MerchDetail  
      merch={this.state.selectedMerch}
      onMerchDelete={this.handleDeleteMerch}
      onMerchEdit={this.handleEdit}
      />
      buttontext = "Return"
    }else if (!this.state.formVisible){
      currentlyVisibleState = <MerchList 
      mainMerchList = {this.state.mainMerchList} 
      OnMerchSelection={this.handleChangingSelectedMerch}
      />
      buttontext = "Add Merch";
    }
    else if (this.state.formVisible){
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleNewMerchFormSubmission}
      buttontext = "Submit" />
      buttontext = "Return";
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