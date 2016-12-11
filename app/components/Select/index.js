import React, { PropTypes } from 'react';
import styled from 'styled-components';

import Caret from './Caret';
import SelectOption from 'components/SelectOption';

const Wrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  background: transparent;
  width: 100%;
  border: 1px solid ${(props) => props.theme.grayLighter};
  border-radius: 6px;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  line-height: 1.4;
  padding: 10px;
  color: ${(props) => props.theme.gray};
`;

const Select = (props) => {
  let content = (<option></option>);

  if (props.options) {
    content = props.options.map((value) => (
      <SelectOption
        key={value.value}
        value={value.value}
        message={props.messages[value.msg]}
      />)
    );
  }

  return (
    <Wrapper>
      <StyledSelect
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      >
        {content}
      </StyledSelect>
      <Caret />
    </Wrapper>
  );
};


Select.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object
};


export default Select;
