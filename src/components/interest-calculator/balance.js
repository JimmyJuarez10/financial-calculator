import React from 'react';

const Balance = (props) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${props.balance}</h1>
    </>
  );
};

export default Balance;
