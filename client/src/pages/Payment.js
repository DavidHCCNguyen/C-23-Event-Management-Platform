import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Payment Page</h2>
      <p>Event ID: {id}</p>
    </div>
  );
};

export default Payment;
