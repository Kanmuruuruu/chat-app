import React from 'react';
import './Contact.css';

function Contact(props){
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt=""/>
            <div>
                <div className="name">{props.name}</div>
                <div className="status">
                    <span className={props.status==="true" ? "status-online" : "status-offline"}></span>
                    <p className="status-text">{props.status==="true" ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>


    );
}

export default Contact;