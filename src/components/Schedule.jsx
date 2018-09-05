import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <h3>{props.location} - {props.day}</h3>
      <p><strong>Booth: {props.booth}</strong></p>
      <p><em>{props.hours}</em></p>
      <hr/>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
