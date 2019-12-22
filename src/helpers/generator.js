import moment from 'moment';
import shuffle from 'shuffle-array';
import { range, map, compose, reverse } from 'ramda';

const now = moment();

const getRandomNumber = (min, max) => shuffle.pick(range(min, max));

const generateItem = () => ({
  date: now.subtract(1, 'd').unix(),
  Price: getRandomNumber(20, 37),
  Yield: getRandomNumber(18, 38),
  Spread: getRandomNumber(25, 30),
});

export const bondData = compose(
  reverse,
  map(generateItem),
  range(0),
)(370);

export const apiBond = {
  title: 'NII CAPITAL 7.625',
  currentPrice: 21,
  code: 'US67021BAE92',
  emitent: 'NII CAPITAL CORP, Telecommunicationns, NR',
  till: '04.01.2020',
  data: bondData,
}
