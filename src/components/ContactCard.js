import React from "react";
import user from "../images/user.png"
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className='item' >

            <img className="ui avatar image" src={user} alt="user" style={{ margin: "10px" }}></img>

            <div className='content'>

                <div className='header' style={{ marginTop: "10px" }} >{name}</div>
                <div>{email}</div>

            </div>
            <i className='trash alternate outline icon' style={{ color: "red", marginTop: "30px", marginBottom: "10px", float: "right" }}></i>
        </div>
    );
}

export default ContactCard