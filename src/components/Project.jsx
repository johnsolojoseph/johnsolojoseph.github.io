import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/project.scss';

import Modal from './Modal';

function Project({title, description, imageUrl, alt}){
    const[showModal, setShowModal] = useState(false);

    function toggle(){
      setShowModal(!showModal);
      
    }

    return(
        <div className="project">
            <div 
            className="project-img" 
            role="button" 
            onClick={toggle} 
            onKeyDown={toggle} 
            tabIndex={0}>
                <img src={imageUrl} alt={alt}/>
            </div>

            <Modal 
            showModal={showModal} 
            toggle={toggle}
            title={title}
            description={description}
            imageUrl={imageUrl}
            />
          
        </div>
    );
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string

};
Project.defaultProps = {
  title: "",
  description: "",
  imageUrl: "",
};

export default Project;
