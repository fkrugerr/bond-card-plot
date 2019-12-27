import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, complement } from 'ramda';

import { periods, viewTypes } from '../constants/plotParams';
import { changePeriod, changeViewType, fetchBond } from '../actions';

import Switcher from './Switcher';
import Selector from './Selector';
import Plot from './Plot';
import { getOutputData } from '../helpers/formatters';

const notEmpty = complement(isEmpty);

function BondCard(props) {
  const {
    selectedPeriod, selectedViewType, onChangeViewType,
    onChangePeriod, bond, getBond, isin,
  } = props;

  useEffect(() => {
    getBond(isin);
  }, [getBond, isin]);

  const [outputData, setOutputData] = useState([]);

  useEffect(() => {
    setOutputData(
      bond.data && notEmpty(bond.data) ? getOutputData(selectedPeriod, bond.data) : []
    );
  }, [selectedPeriod, bond]);

  const { title, currentPrice, code, emitent, till } = bond;

  return notEmpty(bond) && (
    <div>
      <h2 className="text-uppercase">
        {`${title} ${currentPrice}`}
        <span className="small text-muted ml-3">USD</span>
      </h2>
      <p>
        {code}
        <br />
        {`${emitent}, till ${till}`}
      </p>
      <hr />
      <Switcher
        data={periods}
        selected={selectedPeriod}
        handleChange={onChangePeriod}
      />
      <div className="my-4 position-relative plot-holder">
        <Plot
          data={outputData}
          xAxisDataKey="date"
          dataKey={selectedViewType}
        />
        <div className="position-absolute selector-holder">
          <Selector
            data={viewTypes}
            selected={selectedViewType}
            handleChange={onChangeViewType}
          />
        </div>
      </div>
    </div>
  );
}

BondCard.propTypes = {
  selectedPeriod: PropTypes.string.isRequired,
  selectedViewType: PropTypes.string.isRequired,
  onChangePeriod: PropTypes.func.isRequired,
  onChangeViewType: PropTypes.func.isRequired,
  getBond: PropTypes.func.isRequired,
  bond: PropTypes.object.isRequired,
  isin: PropTypes.string.isRequired,
};

export default connect(
  state => ({
    selectedPeriod: state.period,
    selectedViewType: state.viewType,
    bond: state.bond || {},
  }),
  dispatch => ({
    onChangePeriod: value => dispatch(changePeriod(value)),
    onChangeViewType: value => dispatch(changeViewType(value)),
    getBond: () => dispatch(fetchBond()),
  }),
)(BondCard);
