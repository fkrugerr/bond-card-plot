import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip } from 'recharts';
import { isEmpty } from 'ramda';

import { formatDate } from '../helpers/formatters';

function Plot(props) {
  const { data, dataKey, xAxisDataKey } = props;
  return isEmpty(data)
    ? (
      <div>No data!</div>
    ) : (
      <ResponsiveContainer id="plot">
        <LineChart data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            dataKey={xAxisDataKey}
            interval="preserveEnd"
            minTickGap={24}
            tickFormatter={formatDate}
          />
          <YAxis width={20} domain={[17, 'dataMax']} ticks={[25, 30, 35]} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            formatter={val => `$${val}`}
            labelFormatter={formatDate}
          />
          <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
}

Plot.propTypes = {
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  xAxisDataKey: PropTypes.string.isRequired,
};

export default Plot;
