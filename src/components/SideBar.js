import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu'

const SideBar = () => {
    const mystyle = {
        maxWidth:"100%",
        maxHeight:"100%",
        display: "block"
      };

    return (
        <Menu>
            <img src="https://picsum.photos/id/237/200/300" style={mystyle}></img>
            <i className="menu-item">Home</i>
            <i className="menu-item">About</i>
            <i className="menu-item">Contact</i>
        </Menu>
    );
}

export default SideBar;