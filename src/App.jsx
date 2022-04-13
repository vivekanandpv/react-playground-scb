import React from 'react';
import Demo from './components/Demo';
import Sample from './components/Sample';

const App = (props) => {
  return (
    <>
      <div className='container p-5'>
        <h3>App Component</h3>
        <hr />
        <Sample />
        <Demo />
      </div>
    </>
  );
};

export default App;
