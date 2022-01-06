import React from 'react';

const Hello = (props) => {
  console.log('Hello.....');
  return (
    <p>{props.show ? 'This is my first react project on stackblitz :)' : ''}</p>
  );
};

export default React.memo(Hello);
