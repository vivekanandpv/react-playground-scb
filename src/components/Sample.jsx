import React from 'react';

const Sample = (props) => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
      <h3>Sample Component</h3>
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
