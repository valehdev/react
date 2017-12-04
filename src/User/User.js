import React, { Component } from 'react';
import Avatar from './Avatar';
import UserForm from './UserForm';

import './User.css';


class User extends Component {

    
	render() {
        return (

            <div className="user-list">
                <Avatar />
                
                <div className="user-item-fullname">
                    {this.props.user.fullname}
                </div>

                <div className="user-item-actions">

                    <div className="user-item-edit">
                        <button>Edit</button>
                    </div>
                    
                    <div className="user-item-delete">
                        <button>Delete</button>
                    </div>

                </div>

                <p>{this.props.children}</p>

                <UserForm 
                    changed={this.props.changed} 
                    fullname={this.props.user.fullname} 
                />
                
            </div>

        )
    }
	
}

export default User;