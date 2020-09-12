import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.scss';

function Modal({showModal, toggle, title, description, imageUrl}){
    const show = showModal ? "display" : "hide";
    return(

        <div className={`modal ${show}`}>
            <div className="modal-main container padded-sides">
                <button type="button" onClick={toggle}>
                    <i className="fas fa-times fa-5x" />
                </button>
                <div className="content">
                    <h2>{title}</h2>
                    <img src={imageUrl} alt=""/>
                    <p>{description}</p>
                </div>
                
            </div>
        </div>
    );
}

Modal.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
  title:  PropTypes.string,
  description: PropTypes.string,
  imageUrl : PropTypes.string,
};
Modal.defaultProps = {
  showModal: false,
  toggle: '',
  title: 'Default',
  description: 'Enter text here',
  imageUrl: '',
};

export default Modal;
