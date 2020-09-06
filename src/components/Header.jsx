import React from 'react';
import PropTypes from 'prop-types';
import '../styles/header.scss';
import avatarUrl from '../assets/profile.jpg';

import ProfilePic from './ProfilePic';
import RoundedBtn from './RoundedBtn';




function Header({name, title}){
    return(
        <div className="header">
            <ProfilePic avatarUrl={avatarUrl} alt="John in Last Bookstore" />
            <h1 className="name">{name}</h1>
            <h1 className="title">{title}</h1>
            <div className="button-list">
                <RoundedBtn text="my portfolio" />
                <RoundedBtn text="about me" link="/about"/>
            </div>
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
