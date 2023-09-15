// SuccessComponent.js
import React from 'react';

export default function SuccessComponent() {
  return (
    <div className='container mx-auto p-4 text-center'>
      <h2 className='text-2xl font-bold mb-4 text-green-600'>Purchase Successful!</h2>
      <p className='text-lg text-gray-700'>Thank you for your purchase.</p>
    </div>
  );
}