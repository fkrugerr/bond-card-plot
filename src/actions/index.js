import { apiBond } from '../helpers/generator';

export const CHANGE_PERIOD = 'plot/CHANGE_PERIOD';
export const CHANGE_VIEW_TYPE = 'plot/CHANGE_VIEW_TYPE';

export const GET_BOND_INIT = 'api/GET_BOND_INIT';
export const GET_BOND_SUCCESS = 'api/GET_BOND_SUCCESS';
export const GET_BOND_FAIL = 'api/GET_BOND_FAIL';

export const fetchBond = (/* code */) => (dispatch) => {
  dispatch({ type: GET_BOND_INIT });
  setTimeout(() => dispatch({
    type: GET_BOND_SUCCESS,
    payload: apiBond,
  }), 1000);
};

export const changePeriod = payload => ({
  type: CHANGE_PERIOD,
  payload,
});

export const changeViewType = payload => ({
  type: CHANGE_VIEW_TYPE,
  payload,
});
