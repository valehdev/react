import React, {Component} from 'react';
//import './UserForm.css';

class UserForm extends Component {

    render() {
        return (

            <div className="user-form-area">
                <form>
                    <input 
                        type="text" name="fullname" 
                        defaultValue={this.props.fullname} 
                        onChange={this.props.changed}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }

}

export default UserForm;