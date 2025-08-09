import React from 'react';
 

function Add({ a, b }) {
  const sum = Number(a) + Number(b);

  return (
    <div>
      <h1 data-testid="sum-header">{sum}</h1>
    </div>
  );
}
 
export default Add;