import React from 'react';
import PropTypes from 'prop-types';

function Selector(props) {
  const { data, handleChange, selected } = props;
  return (
    <select
      className="form-control"
      value={selected}
      onChange={e => handleChange(e.target.value)}
      id="selector"
    >
      {data.map(item => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  );
}

Selector.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Selector;
