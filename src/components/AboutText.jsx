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
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.array,
  };
AboutText.defaultProps = {
    children: [],
  };

export default AboutText;