import React, { Component } from 'react';
import avatar1 from './Assets/avatar1.png';
import './Avatar.css';

class Avatar extends Component {

    render() {

        return (
            <div className="user-avatar-block">
                <img className="user-avatar-item" src={avatar1} alt="Fucking alt" />
            </div>
        )

    }

}

export default Avatar;

