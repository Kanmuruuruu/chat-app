import React from 'react';
import Contact from "./Contact";

const contacts=[
    {
        "status": "true",
        "name": "Garrison Turcotte",
        "avatar": "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        "status": "false",
        "name": "Orrin Kohler",
        "avatar": "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        "status": "true",
        "name": "Grace Trantow",
        "avatar": "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        "status": "false",
        "name": "Hilario Streich",
        "avatar": "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
        "status": "true",
        "name": "Aurelia Gutkowski",
        "avatar": "https://randomuser.me/api/portraits/men/72.jpg",
    }
];

const ContactList = () => (
    <div>
        {contacts.map( item => (
            <Contact
                name={item.name}
                avatar={item.avatar}
                status={item.status}
            />
        ))}
    </div>
);

export default ContactList;
