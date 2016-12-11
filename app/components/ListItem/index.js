import React, { PropTypes } from 'react';

import Item from './Item';


const ListItem = (props) => (
  <Item>
    {props.item}
  </Item>
);

ListItem.propTypes = {
  item: PropTypes.any
};


export default ListItem;
