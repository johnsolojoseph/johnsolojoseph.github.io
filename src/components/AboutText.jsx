import React from 'react';
import '../styles/about-text.scss';
import PropTypes from 'prop-types';

function AboutText({children}){
    return(
        <div className="about-text padded-sides">
            <h3>
                {children}
            </h3>
        </div>
    );
}

AboutText.propTypes = {
    children: PropTypes.string,
  };
AboutText.defaultProps = {
    children: '',
  };

export default AboutText;