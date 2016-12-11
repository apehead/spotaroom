import { fromJS } from 'immutable';
import expect from 'expect';

import {
  selectHome,
  selectFilterPrice,
  selectFilterProperty,
  // selectPriceRooms,
  selectPropertyTypeRooms
  // selecFilteredRooms
} from '../selectors';
import {
  // FILTER_PRICE_DESC,
  FILTER_PROPERTY_ALL
} from '../constants';

describe('selectHome', () => {
  const homeSelector = selectHome();
  it('should select the home state', () => {
    const homeState = fromJS({
      filterPrice: '',
      filterProperty: ''
    });

    const mockedState = fromJS({
      home: homeState
    });

    expect(homeSelector(mockedState)).toEqual(homeState);
  });
});

describe('selectFilterPrice', () => {
  const filterPriceSelector = selectFilterPrice();

  it('should select the filter price', () => {
    const filterPrice = 'fake filter price';
    const mockedState = fromJS({
      home: {
        filterPrice
      }
    });

    expect(filterPriceSelector(mockedState)).toEqual(filterPrice);
  });
});

describe('selectFilterProperty', () => {
  const filterPropertySelector = selectFilterProperty();

  it('should select the filter property', () => {
    const filterProperty = 'fake filter property';
    const mockedState = fromJS({
      home: {
        filterProperty
      }
    });

    expect(filterPropertySelector(mockedState)).toEqual(filterProperty);
  });
});

// describe('selectPriceRooms', () => {
//   const priceRoomsSelector = selectPriceRooms();
//
//   it('should select the rooms ordered by descending price', () => {
//     const filterPrice = FILTER_PRICE_DESC;
//     const rooms = [
//       {
//         pricePerMonth: 100
//       },
//       {
//         pricePerMonth: 200
//       },
//       {
//         pricePerMonth: 150
//       }
//     ];
//
//     const expectedResult = fromJS([
//       {
//         pricePerMonth: 200
//       },
//       {
//         pricePerMonth: 150
//       },
//       {
//         pricePerMonth: 100
//       }
//     ]);
//
//     const mockedState = fromJS({
//       global: {
//         rooms
//       },
//       home: {
//         filterPrice
//       }
//     });
//
//     expect(priceRoomsSelector(mockedState)).toEqual(expectedResult);
//   });
//
//   it('should select the rooms ordered by descending price', () => {
//     const filterPrice = '';
//     const rooms = [
//       {
//         pricePerMonth: 100
//       },
//       {
//         pricePerMonth: 200
//       },
//       {
//         pricePerMonth: 150
//       }
//     ];
//
//     const expectedResult = fromJS([
//       {
//         pricePerMonth: 100
//       },
//       {
//         pricePerMonth: 150
//       },
//       {
//         pricePerMonth: 200
//       }
//     ]);
//
//     const mockedState = fromJS({
//       global: {
//         rooms
//       },
//       home: {
//         filterPrice
//       }
//     });
//
//     expect(priceRoomsSelector(mockedState)).toEqual(expectedResult);
//   });
// });


describe('selectPropertyTypeRooms', () => {
  const propertyTypeRoomSelector = selectPropertyTypeRooms();

  it('should select the all the room types', () => {
    const filterProperty = FILTER_PROPERTY_ALL;
    const rooms = [
      {
        type: 'apartment'
      },
      {
        type: 'shared_room'
      },
      {
        type: 'studio'
      }
    ];

    const expectedResult = fromJS([
      {
        type: 'apartment'
      },
      {
        type: 'shared_room'
      },
      {
        type: 'studio'
      }
    ]);

    const mockedState = fromJS({
      global: {
        rooms
      },
      home: {
        filterProperty
      }
    });

    expect(propertyTypeRoomSelector(mockedState)).toEqual(expectedResult);
  });

  // it('should select the right room types', () => {
  //   const filterProperty = 'shared_room';
  //   const rooms = [
  //     {
  //       type: 'apartment'
  //     },
  //     {
  //       type: 'shared_room'
  //     },
  //     {
  //       type: 'studio'
  //     }
  //   ];
  //
  //   const expectedResult = fromJS([
  //     {
  //       type: 'shared_room'
  //     }
  //   ]);
  //
  //   const mockedState = fromJS({
  //     global: {
  //       rooms
  //     },
  //     home: {
  //       filterProperty
  //     }
  //   });
  //
  //   expect(propertyTypeRoomSelector(mockedState)).toEqual(expectedResult);
  // });
});
