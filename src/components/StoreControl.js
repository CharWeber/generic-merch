import React from "react";
import MerchDetail from "./MerchDetail";
import MerchList from "./MerchList";
import NewMerchForm from "./NewMerchForm";
import EditMerch from "./EditMerch";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class StoreControl extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      formVisible: false,
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
    const { dispatch } = this.props;
    const { id, title, category, quantity, key, imgSRC } = newMerch;
    const action = {
      type: 'ADD_MERCH',
      title: title,
      category: category,
      quantity: quantity,
      id: id,
      key: key,
      imgSRC: imgSRC
    }
    dispatch(action);
    this.setState({
      formVisible: false
    });
  }
  
  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.mainMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeleteMerch = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'DELETE_MERCH',
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null});
  }

  handleEditMerch = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, title, category, quantity, key, imgSRC } = merchToEdit;
    const action = {
      type: 'ADD_MERCH',
      title: title,
      category: category,
      quantity: quantity,
      id: id,
      key: key,
      imgSRC: imgSRC
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
  });
  }

  handleEdit = ()=>{
    this.setState({editing: true})
  }

  handleBuyMerch = (id) => {
    let selectMerch = this.props.mainMerchList[id]
    selectMerch.quantity -= 1;
    const { dispatch } = this.props;
    const { title, category, quantity, key, imgSRC } = selectMerch;
    const action = {
      type: 'ADD_MERCH',
      title: title,
      category: category,
      quantity: quantity,
      id: id,
      key: key,
      imgSRC: imgSRC
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
  });
  }

  handleRestockMerch = (id, qty) => {
    let selectMerch = this.props.mainMerchList[id]
    selectMerch.quantity += qty;
    const { dispatch } = this.props;
    const { title, category, quantity, key, imgSRC } = selectMerch;
    const action = {
      type: 'ADD_MERCH',
      title: title,
      category: category,
      quantity: quantity,
      id: id,
      key: key,
      imgSRC: imgSRC
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
  });
  }


  render(){
    let currentlyVisibleState = null;
    let buttontext = null;

    if (!this.state.dataLoaded){
      const {dispatch} = this.props;
      const merchData = [
        {
          type: 'ADD_MERCH',
          title: 'T-Shirt',
          category: 'Clothing',
          quantity: 1,
          id: '1',
          key: '1',
          imgSRC: 'https://picsum.photos/131'
        },
        {
          type: 'ADD_MERCH',
          title: 'Earrings',
          category: 'Accesory',
          quantity: 5,
          id: '2',
          key: '2',
          imgSRC: 'https://picsum.photos/132'
        },
        {
          type: 'ADD_MERCH',
          title: 'Music CD',
          category: 'Music',
          quantity: 5,
          imgSRC: 'https://picsum.photos/133',
          id: '3',
          key: '3'
        },
        {
          type: 'ADD_MERCH',
          title: 'Figurine Set',
          category: 'Misc',
          quantity: 5,
          id: '4',
          key: '4',
          imgSRC: 'https://picsum.photos/134'
        }]
        merchData.forEach((action) => {
          dispatch(action)
        });
      this.setState({
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
      mainMerchList = {this.props.mainMerchList} 
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
      <button onClick={this.handleClick} class='btn btn-light'>{buttontext}</button>
      </React.Fragment>
    );
  }
}

StoreControl.propTypes = {
  mainMerchList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainMerchList: state
  }
}

StoreControl = connect(mapStateToProps)(StoreControl);

export default StoreControl;