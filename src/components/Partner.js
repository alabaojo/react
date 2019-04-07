import React from "react";

import "./Contact.css";

import PropTypes from "prop-types";

function Partner(props) {
  return (
    <div className="partner">
      <span>{props.name}</span>
    </div>
  );
}

Partner.propTypes = {
  name: PropTypes.string.isRequired
};
export default Partner;
