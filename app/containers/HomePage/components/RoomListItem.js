import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import media from 'styles/media';

import H3 from 'components/H3';
import Img from 'components/Img';
import Button from 'components/Button';
import ListItem from 'components/ListItem';
import messages from 'containers/HomePage/messages';


// TODO: extract to different components

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: ${(props) => props.theme.backgroundLight};

  ${media.tablet`
    flex-direction: column;
  `}
`;

const MediaContainer = styled.div`
  max-width: 30%;
  margin-bottom: 0;
  margin-right: 10px;

  ${media.tablet`
    max-width: 100%;
    margin-bottom: 1.5em;
  `}
`;

const Media = styled(Img)`
  max-width: 100%;

  &:hover {
    filter: brightness(110%);
    box-shadow: 9px 15px 45px -4px rgba(0,0,0,0.8);
  }
`;

const InfoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.tablet`
    width: 100%;
  `}
`;

const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1em;
`;

const Price = styled.div`
  font-family: 'Luckiest Guy';
  font-size: 25px;
  color: ${(props) => props.theme.secondaryDark};
  margin-left: 10px;
  white-space: nowrap;
`;

const Description = styled(H3)`
  margin: 0;
  line-height: 1.4em;
`;

const InfoActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonFirst = styled(Button)`
  margin-right: 20px;
`;

const RoomListItem = (props) => {
  const item = props.item;

  const content = (
    <Wrapper>
      <MediaContainer>
        <Media
          src={item.mainPhotoUrl}
          alt={item.title}
        />
      </MediaContainer>
      <InfoContainer>
        <InfoHeader>
          <Description>{item.title}</Description>
          <Price>{item.pricePerMonth} {item.currencySymbol}</Price>
        </InfoHeader>
        <InfoActions>
          <ButtonFirst>
            <FormattedMessage {...messages.actionDetails} />
          </ButtonFirst>
          <Button secondary>
            <FormattedMessage {...messages.actionBook} />
          </Button>
        </InfoActions>
      </InfoContainer>
    </Wrapper>
  );

  return (
    <ListItem key={item.id} item={content} />
  );
};

RoomListItem.propTypes = {
  item: React.PropTypes.object
};


export default RoomListItem;
