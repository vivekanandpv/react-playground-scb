import React from 'react';

const Demo = (props) => {
  return (
    <>
      <h3>Demo Component</h3>
      <hr />
      <p>
        {props.year} {props.colors} {props.book.title}
      </p>
    </>
  );
};

export default Demo;
