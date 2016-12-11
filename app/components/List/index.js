import React, { PropTypes } from 'react';

import Ul from './Ul';
import Wrapper from './Wrapper';


const List = (props) => {
  const Component = props.component;
  let content = (<div></div>);

  if (props.items) {
    content = props.items.map((item) => (
      <Component
        key={item.id}
        item={item}
      />
    ));
  } else {
    content = (<Component />);
  }

  return (
    <Wrapper>
      <Ul>
        {content}
      </Ul>
    </Wrapper>
  );
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};


export default List;
