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
      dataLoaded: false,
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

  handleBuyMerch = (id) => {
    let selectMerch = this.state.mainMerchList.filter(merch => merch.id === id);
    selectMerch[0].quantity -= 1;
    let newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id)
      .concat(selectMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null,
      editing: false
    })
  }

  handleRestockMerch = (id, qty) => {
    let selectMerch = this.state.mainMerchList.filter(merch => merch.id ===id);
    selectMerch[0].quantity += qty;
    let newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id)
      .concat(selectMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null,
      editing: false
    })
  }


  render(){
    let currentlyVisibleState = null;
    let buttontext = null;

    if (!this.state.dataLoaded){
      let newMainMerchList = [
        {
          title: 'T-Shirt',
          type: 'Clothing',
          quantity: 1,
          id: '1',
          key: '1'
        },
        {
          title: 'Earrings',
          type: 'Accesory',
          quantity: 5,
          id: '2',
          key: '2'
        },
        {
          title: 'Music CD',
          type: 'Music',
          quantity: 5,
          id: '3',
          key: '3'
        },
        {
          title: 'Figurine Set',
          type: 'Misc',
          quantity: 5,
          id: '4',
          key: '4'
        }]
      this.setState({
        mainMerchList: newMainMerchList,
        dataLoaded: true
      })
    }


    if (this.state.editing){
      currentlyVisibleState = <EditMerch  
      merch={this.state.selectedMerch}
      onEditMerch={this.handleEditMerch}
      />
      buttontext = "Return"
    }else if (this.state.selectedMerch != null){
      currentlyVisibleState = <MerchDetail  
      merch={this.state.selectedMerch} 
      onMerchBuy = {this.handleBuyMerch}
      onMerchDelete={this.handleDeleteMerch}
      onMerchEdit={this.handleEdit}
      onMerchRestock={this.handleRestockMerch}
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