import React from 'react';

const App = (props) => {
  let message = 'Good evening!';
  const index = 1234;

  const foo = () => 1234 * 8;

  return (
    <>
      <h3 id={index * 9 + foo()}>My number is: {message + ' ' + foo()}</h3>
    </>
  );
};

export default App;
