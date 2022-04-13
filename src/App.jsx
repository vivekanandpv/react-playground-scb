import React, { useState } from 'react';
import Demo from './components/Demo';
import Sample from './components/Sample';

const App = (props) => {
  const [flag, setFlag] = useState(true);

  const handleToggle = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className='container p-5'>
        <h3>App Component</h3>
        <hr />
        <Sample message='Good morning' firstName='Gangadhar' lastName='K' />
        <Demo
          year={2022}
          colors={['red', 'green', 'blue']}
          book={{ title: 'War and Peace', price: 100 }}
        />
        <hr />
        <button className='btn btn-warning my-3' onClick={handleToggle}>
          Toggle Flag
        </button>
        {flag ? <p>Flag is true</p> : null}
      </div>
    </>
  );
};

export default App;
