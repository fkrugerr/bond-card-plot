import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { prop } from 'ramda';

import { periods, viewTypes } from '../constants/plotParams';
import { changePeriod, changeViewType } from '../actions';

import Switcher from './Switcher';
import Selector from './Selector';
import Plot from './Plot';

import { bondData } from '../helpers/generator';
import { getOutputData } from '../helpers/formatters';

function BondCard(props) {
  const {
    title, selectedPeriod, selectedViewType, onChangeViewType,
    onChangePeriod, bond,
  } = props;

  const [outPutData, setOutputData] = useState([]);

  useEffect(() => {
    setOutputData(
      bond && prop('data', bond) ? getOutputData(selectedPeriod, bond.data) : []
    );
  }, [selectedPeriod, bond]);

  return bond && (
    <div>
      <h2 className="text-uppercase">
        {title}
        <span className="small text-muted ml-3">USD</span>
      </h2>
      <p>
        YUHGFRT567
        <br />
        {`${title}, Telecommnications till 01.0402016`}
      </p>
      <hr />
      <Switcher
        data={periods}
        selected={selectedPeriod}
        handleChange={onChangePeriod}
      />
      <div className="my-4 position-relative plot-holder">
        <Plot
          data={outPutData}
          xDataKey="date"
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
  title: PropTypes.string.isRequired,
  selectedPeriod: PropTypes.string.isRequired,
  selectedViewType: PropTypes.string.isRequired,
  onChangePeriod: PropTypes.func.isRequired,
  onChangeViewType: PropTypes.func.isRequired,
  bond: PropTypes.object,
};

BondCard.defaultProps = {
  title: 'NII Capital 7.625 21',
  bond: {
    data: bondData,
  },
};

export default connect(
  state => ({
    selectedPeriod: state.period,
    selectedViewType: state.viewType,
  }),
  dispatch => ({
    onChangePeriod: value => dispatch(changePeriod(value)),
    onChangeViewType: value => dispatch(changeViewType(value)),
  }),
)(BondCard);
