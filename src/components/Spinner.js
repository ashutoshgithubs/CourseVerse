import React from 'react'
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className='flex flex-col space-y-4'>
        <div  className='custom-loader'></div>
        <h2 className='text-lg font-medium text-white'>Loading...</h2>
    </div>
  )
}
