import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';


const SelectOption = ({ value, message, intl }) => (
  <option value={value}>
    {intl.formatMessage(message)}
  </option>
);

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};


export default injectIntl(SelectOption);
