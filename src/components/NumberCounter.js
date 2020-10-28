import React from 'react';

const NumberCounter = () => {
  return (
    <div className="flex flex-row py-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
            -
        </button>
        <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" readOnly />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded">
            +
        </button>
     
    </div>
  );
}

export default NumberCounter
