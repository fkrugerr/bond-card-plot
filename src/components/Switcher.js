import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Switcher(props) {
  const { data, handleChange, selected } = props;
  return (
    <div className="btn-group" role="group">
      {data.map(item => (
        <button
          key={item}
          type="button"
          className={classnames(
            'btn btn-outline-secondary btn-sm text-capitalize',
            {
              active: selected === item,
            }
          )}
          onClick={handleChange.bind(null, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

Switcher.propTypes = {
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Switcher;
