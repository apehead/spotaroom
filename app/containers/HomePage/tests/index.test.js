import expect from 'expect';
import { shallow, mount } from 'enzyme';

import React from 'react';
import { IntlProvider } from 'react-intl';

import { HomePage, mapDispatchToProps } from '../index';
import { changeFilterPrice, changeFilterProperty } from '../actions';
import { loadRooms } from 'containers/App/actions';
import RoomListItem from '../components/RoomListItem';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Loading from 'components/Loading';


describe('<HomePage />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(<HomePage loading />);

    expect(renderedComponent.contains(<Loading />)).toEqual(true);
  });

  it('should render a <ListItem> with an error message when fails', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <HomePage
          loading={false}
          error={{ message: 'fake error' }}
          onMounted={() => {}}
        />
      </IntlProvider>
    );

    expect(renderedComponent.contains(<ListItem item={'Something went wrong :('} />)).toEqual(true);
  });

  it('should fetch rooms when mounted', () => {
    const onMountedSpy = expect.createSpy();

    mount(
      <IntlProvider locale="en">
        <HomePage
          onMounted={onMountedSpy}
        />
      </IntlProvider>
    );

    expect(onMountedSpy).toHaveBeenCalled();
  });

  it('should render the repositories if loading was successful', () => {
    const rooms = [
      {
        id: 'fake id 1',
        price: 'fake price 1'
      },
      {
        id: 'fake id 2',
        price: 'fake price 2'
      }
    ];

    const renderedComponent = shallow(
      <HomePage
        rooms={rooms}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={rooms} component={RoomListItem} />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onMounted', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);

        expect(result.onMounted).toExist();
      });

      it('should dispatch loadRooms when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const filterProperty = 'fake filter property';

        result.onMounted();

        expect(dispatch).toHaveBeenCalledWith(loadRooms(filterProperty));
      });
    });

    describe('onChangeFilterProperty', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);

        expect(result.onChangeFilterProperty).toExist();
      });

      it('should dispatch changeFilterProperty when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const filterProperty = 'fake filter property';

        result.onChangeFilterProperty({ target: { value: filterProperty } });

        expect(dispatch).toHaveBeenCalledWith(changeFilterProperty(filterProperty));
      });
    });

    describe('onChangeFilterPrice', () => {
      it('should be injected', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);

        expect(result.onChangeFilterPrice).toExist();
      });

      it('should dispatch changeFilterPrice when called', () => {
        const dispatch = expect.createSpy();
        const result = mapDispatchToProps(dispatch);
        const filterPrice = 'fake filter price';

        result.onChangeFilterPrice({ target: { value: filterPrice } });

        expect(dispatch).toHaveBeenCalledWith(changeFilterPrice(filterPrice));
      });
    });
  });
});
