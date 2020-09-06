import React from 'react';
import PropTypes from 'prop-types';
import '../styles/word-block.scss';


function WordBlock({text, color}){
    return(
        <div className="word-block">
            <h1 className={color}>
                {text}
            </h1>
        </div>
    );
}

WordBlock.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  };
 WordBlock.defaultProps = {
    text: "default",
    color: "blue",
  };

export default WordBlock;