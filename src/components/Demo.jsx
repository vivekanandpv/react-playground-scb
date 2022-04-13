import React from 'react';

const Demo = (props) => {
  return (
    <>
      <h3>Demo Component</h3>
      <hr />
      <p>{props.year}</p>
      <ul>
        {props.colors.map((c) => {
          return <li>{c}</li>;
        })}
      </ul>
    </>
  );
};

export default Demo;
