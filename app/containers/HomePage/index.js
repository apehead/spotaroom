import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Select from 'components/Select';
import List from 'components/List';
import ListItem from 'components/ListItem';

import HomePageWrapper from './components/HomePageWrapper';
import SectionRooms from './components/SectionRooms';
import SectionFilters from './components/SectionFilters';
import FiltersHeader from './components/FiltersHeader';
import LabelFilter from './components/LabelFilter';
import RoomListItem from './components/RoomListItem';
import DownloadSearch from './components/DownloadSearch';
import SelectWrapper from './components/SelectWrapper';
import Loading from 'components/Loading';

import messages from './messages';
import { loadRooms } from 'containers/App/actions';
import { changeFilterPrice, changeFilterProperty } from './actions';
import { selecFilteredRooms } from './selectors';
import { /* selectFeedId, */ selectLoading, selectError } from 'containers/App/selectors';
// import { selectLocale } from '../LanguageProvider/selectors';
import {
  FILTER_PROPERTY_ALL,
  FILTER_PROPERTY_APARTMENT,
  FILTER_PROPERTY_ROOM,
  FILTER_PROPERTY_STUDIO,
  FILTER_PRICE_ASC,
  FILTER_PRICE_DESC
} from './constants';

export class HomePage extends React.PureComponent {

  componentDidMount() {
    this.props.onMounted(this.props.feedId);
  }

  renderMainContent() {
    if (this.props.loading) {
      return (<Loading />);
    } else if (this.props.error !== false) {
      // TODO: extract to a component
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong :('} />
      );

      return (<List component={ErrorComponent} />);
    } else if (this.props.rooms !== false) {
      if (!this.props.rooms.length) {
        // TODO: extract to a component
        const EmptyListComponent = () => (
          <ListItem item={'Sorry, no results for the selected filters'} />
        );

        return (<List component={EmptyListComponent} />);
      }

      return (<List items={this.props.rooms} component={RoomListItem} />);
    }

    return null;
  }

  render() {
    return (
      <HomePageWrapper>

        <Helmet
          title="Home Page"
        />

        <SectionFilters>

          <FiltersHeader>
            <FormattedMessage {...messages.filtersTitle} />
          </FiltersHeader>

          <LabelFilter htmlFor="filterProperty"><FormattedMessage {...messages.filterPropertyTitle} /></LabelFilter>
          <SelectWrapper>
            <Select
              id="filterProperty"
              onChange={this.props.onChangeFilterProperty}
              messages={messages}
              options={[
                { value: FILTER_PROPERTY_ALL, msg: 'filterPropertyAll' },
                { value: FILTER_PROPERTY_APARTMENT, msg: 'filterPropertyApartment' },
                { value: FILTER_PROPERTY_ROOM, msg: 'filterPropertyRoom' },
                { value: FILTER_PROPERTY_STUDIO, msg: 'filterPropertyStudio' }
              ]}
            />
          </SelectWrapper>

          <LabelFilter htmlFor="filterPrice"><FormattedMessage {...messages.filterPriceTitle} /></LabelFilter>
          <SelectWrapper>
            <Select
              id="filterPrice"
              onChange={this.props.onChangeFilterPrice}
              messages={messages}
              options={[
                { value: FILTER_PRICE_ASC, msg: 'filterPriceAscending' },
                { value: FILTER_PRICE_DESC, msg: 'filterPriceDescending' }
              ]}
            />
          </SelectWrapper>

          <DownloadSearch data={this.props.rooms} />

        </SectionFilters>

        <SectionRooms>
          {this.renderMainContent()}
        </SectionRooms>

      </HomePageWrapper>
    );
  }
}

HomePage.propTypes = {
  feedId: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  rooms: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),

  onMounted: PropTypes.func,
  onChangeFilterPrice: PropTypes.func,
  onChangeFilterProperty: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onMounted: (feedId) => dispatch(loadRooms(feedId)),
    onChangeFilterPrice: (evt) => dispatch(changeFilterPrice(evt.target.value)),
    onChangeFilterProperty: (evt) => dispatch(changeFilterProperty(evt.target.value))
  };
}

const mapStateToProps = (state, ownProps) => {
  const { feedId } = ownProps.params;

  return createStructuredSelector({
    // locale: selectLocale(),
    feedId: () => feedId,
    rooms: selecFilteredRooms(),
    loading: selectLoading(),
    error: selectError()
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
