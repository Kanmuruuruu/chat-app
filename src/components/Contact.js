import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            online: props.online
        };
    }
    changerStatus = () => {
        const online=this.state.online;
        this.setState({online: online ? false : true});
    }

    render(){
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt=""/>
                <div>
                    <div className="name">{this.props.name}</div>
                    <div className="status">
                        <span onClick={this.changerStatus} className={this.state.online ? "status-online" : "status-offline"}></span>
                        <p className="status-text">{this.state.online === "true" ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;