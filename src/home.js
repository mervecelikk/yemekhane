
import React, { Component } from 'react';
import Modal from 'react-modal';
import './AddModal.css';
import firebase from 'firebase';


class Home extends Component {
  constructor(){
    super();
    this.state = {
     
      modalIsOpen: false,
      marka: '',
    }

  }

  issueHeaderOnChange = (e) => {
    this.setState({ issueHeader: e.target.value });
  }


  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  issueSolutionsValueAdderOnChange = (e) => {
    this.setState({marka: e.target.value})
  }


  save = () => {
    const dbRef = firebase.database().ref('arac');
    dbRef.push({
      plaka: this.state.issueHeader,
      marka: this.state.marka,
    })
   

    
    
}


render(){
    return(
      <div>
        
       
        
        <button onClick={this.openModal} type="button" className="btn btn-default btn-circle btn-xl"><i className="fas fa-plus"></i></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="col-6 mx-auto mt-5 border border-primary bg-light">
              <div className="modal-header">
                <h4>Araç Bilgi Giriş Formu</h4>
              </div>
              <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-8">
                      <div className="form-group">
                        <input
                        onChange={this.issueHeaderOnChange}
                        ref="issueHeader"
                        className="form-control"
                        placeholder="Plaka No"
                        />
                      </div>
                      <div className="form-group">
                
                     
                      <select class="custom-select" id="inputGroupSelect01" onChange={this.issueSolutionsValueAdderOnChange} >
                        <option selected>Aracın Modeli</option>
                        <option value="1">One</option>
                          <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
              
                      </div>
                  </div>
                  </div>
              </form>
              </div>
              <div className="modal-footer">
                <button className="text-white btn btn-warning btn-lg" onClick={() => { this.save(); this.closeModal();}}>Kaydet</button>
                <button className="btn btn-danger btn-lg" onClick={this.closeModal}>Kapat</button>
              </div>
        </Modal>
      </div>
    )
  }
}

export default Home;