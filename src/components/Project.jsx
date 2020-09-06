import React from 'react';
import PropTypes from 'prop-types';
import '../styles/project.scss';

function Project({title, description, imageUrl, alt}){
    return(
        <div className="project">
            <div className="project-img">
                <img src={imageUrl} alt={alt}/>
            </div>
          
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
