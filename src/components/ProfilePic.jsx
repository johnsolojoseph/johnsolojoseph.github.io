import React from 'react';
import PropTypes from 'prop-types';
import '../styles/profile-pic.scss';

function ProfilePic({avatarUrl, alt}){
    return(
        <div className="profile-pic">
          <img src={avatarUrl} alt={alt}/>
        </div>
    );
}

ProfilePic.propTypes = {
  avatarUrl: PropTypes.string,
  alt: PropTypes.string,
};
ProfilePic.defaultProps = {
  avatarUrl: "",
  alt: "",
};

export default ProfilePic;
