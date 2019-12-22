import moment from 'moment';
import { filter } from 'ramda';

export const formatTick = val => moment(val * 1000).format('DD.MM.YY');

export const getLimit = (period) => {
  switch (period) {
    case 'weak':
      return moment().subtract(1, 'w').unix();
    case 'month':
      return moment().subtract(1, 'month').unix();
    case 'quater':
      return moment().subtract(3, 'month').unix();
    case 'year':
      return moment().subtract(1, 'year').unix();
    default:
      return 'dataMin';
  }
};

export const getOutputData = (period, data) => {
  let limit = 0;
  switch (period) {
    case 'weak':
      limit = moment().subtract(1, 'w').unix();
      break;
    case 'month':
      limit = moment().subtract(1, 'month').unix();
      break;
    case 'quater':
      limit = moment().subtract(3, 'month').unix();
      break;
    case 'year':
      limit = moment().subtract(1, 'year').unix();
      break;
    default:
      break;
  }
  return limit ? filter(
    item => item.date > limit,
    data,
  ) : data;
};
