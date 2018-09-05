import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <ul>{
        props.selection.map(function(produce, index){
          console.log('test');
          return <li key={index}>{produce}</li>;
        })
      }</ul>
      <hr/>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array,
};

export default Produce;
