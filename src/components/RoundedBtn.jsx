import React from 'react';
import PropTypes from 'prop-types';
import '../styles/rounded-btn.scss';

function RoundedBtn({text, link}){
    return(
        <div className="rounded-btn">
          <button type="button">
              {text}
          </button>
        </div>
    );
}

RoundedBtn.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
RoundedBtn.defaultProps = {
  text: "default",
  link: "/",
};

export default RoundedBtn;
