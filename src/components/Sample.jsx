import React from 'react';

const Sample = (props) => {
  return (
    <>
      <h3>Sample Component</h3>
      <hr />
      <p>
        {props.message} :: {props.firstName} :: {props.lastName}
      </p>
    </>
  );
};

export default Sample;
