import {
  CHANGE_PERIOD,
  CHANGE_VIEW_TYPE,
  GET_BOND_INIT,
  GET_BOND_SUCCESS,
} from '../actions';

const initialState = {
  loading: false,
  bond: null,
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
    case GET_BOND_INIT:
      return {
        ...state,
        loading: true,
      };
    case GET_BOND_SUCCESS:
      return {
        ...state,
        loading: false,
        bond: action.payload,
      };
    default:
      return state;
  }
};
