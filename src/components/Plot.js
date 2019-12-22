import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip } from 'recharts';
import { isEmpty } from 'ramda';

import { formatTick } from '../helpers/formatters';

function Plot(props) {
  const { data, dataKey, xDataKey } = props;
  return isEmpty(data)
    ? (
      <div>No data!</div>
    ) : (
      <ResponsiveContainer id="plot">
        <LineChart data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey={xDataKey}
            interval="preserveEnd"
            minTickGap={24}
            tickFormatter={formatTick}
          />
          <YAxis width={20} domain={[17, 'dataMax']} ticks={[25, 30, 35]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}

Plot.propTypes = {
  data: PropTypes.array,
  dataKey: PropTypes.string,
  xDataKey: PropTypes.string.isRequired,
};

Plot.defaultProps = {
  data: [],
  dataKey: '',
};

export default Plot;
