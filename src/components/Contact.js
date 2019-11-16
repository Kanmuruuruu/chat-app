import React from 'react';
import './Contact.css';

function Contact(props){
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt=""/>
            <div>
                <div className="name">{props.name}</div>
                <div className="status">
                    <div className={props.status=="true" ? "status-online" : "status-offline"}>
                        <span className="status-text">{props.status=="true" ? "Online" : "Offline"}</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contact;