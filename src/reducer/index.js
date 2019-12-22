import {
  CHANGE_PERIOD,
  CHANGE_VIEW_TYPE,
} from '../actions';

const initialState = {
  bonds: [],
  period: 'month',
  viewType: 'Price',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PERIOD:
      return {
        ...state,
        period: action.payload,
      };
    case CHANGE_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};
