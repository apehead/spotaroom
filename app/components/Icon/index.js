import React, { PropTypes } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Icon = ({ icon }) => (<i className={`fa fa-${icon}`} aria-hidden="true"></i>);

Icon.propTypes = {
  icon: PropTypes.string.isRequired
};


export default Icon;
