import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';
import ProfilePic from './ProfilePic';
import avatarUrl from '../assets/profile.jpg';

function Header({name, title}){
    return(
        <div className="header">
            <ProfilePic avatarUrl={avatarUrl} alt="Self portrait of John in Last Bookstore" />
            <h1 className="name">{name}</h1>
            <h1 className="title">{title}</h1>
        </div>
    
    );
}

Header.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
  };
 Header.defaultProps = {
    name: 'John Doe',
    title: 'title',
  };

export default Header;
