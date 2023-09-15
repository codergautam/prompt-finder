import React from 'react';
import SuccessComponent from '../../buycompletehelpers/SuccessComponent';
import FailureComponent from '../../buycompletehelpers/FailureComponent';

export default function BuyComplete({success}) {
  return (
    <div className='container mx-auto p-4'>
      {success === 'true' ? <SuccessComponent /> : <FailureComponent />}
      <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        Back to Home
      </button>
    </div>
  );
}