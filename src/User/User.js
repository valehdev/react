import React, { Component } from 'react';
import Avatar from './Avatar';

import './User.css';


class User extends Component {
	
	render() {
        return (
            <div className="user-list">
                <div className="user-item">
                    <Avatar />
                    <div className="user-item-fullname">
                        <span></span>
                    </div>
                    <div className="actions">
                        <div className="edit">
                            <button>Edit</button>
                        </div>
                        <div className="delete">
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        )
    }
	
}

export default User;