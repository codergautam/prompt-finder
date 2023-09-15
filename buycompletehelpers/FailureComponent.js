// FailureComponent.js
import React from 'react';

export default function FailureComponent() {
  return (
    <div className='container mx-auto p-4 text-center'>
      <h2 className='text-2xl font-bold mb-4 text-red-600'>Purchase Failed!</h2>
      <p className='text-lg text-gray-700'>Please try again.</p>
    </div>
  );
}