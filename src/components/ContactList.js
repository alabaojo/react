import React from "react";

// import the Contact component
import Contact from "./Contact";

import Partner from "./Partner";


function ContactList(props) {
  return (
 <div style={{ height: '70%' }}>
{props.contacts.map(c =>  <Contact key={c.id} name={c.name} phone={c.phone} />)}
  </div> 
 );
}
export default ContactList;
