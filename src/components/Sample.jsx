import React, { useState } from 'react';

const Sample = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h3>Sample Component: {counter}</h3>
      <hr />
      <p>
        {props.message} :: {props.firstName} :: {props.lastName}
      </p>
      <button className='btn btn-primary' onClick={handleClick}>
        Click Here
      </button>
    </>
  );
};

export default Sample;
