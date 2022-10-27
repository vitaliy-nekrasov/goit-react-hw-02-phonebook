import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
