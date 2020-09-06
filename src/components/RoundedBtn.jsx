import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/rounded-btn.scss';

function RoundedBtn({text, link}){
    return(
        <div className="rounded-btn">
            <Link to={link}>
                {text}
            </Link>
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
