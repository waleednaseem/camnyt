import React from 'react'




const CancelPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Payment Canceled</h1>
      <p className="text-lg mb-8 text-gray-700">Your payment has been canceled.</p>
      <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
    </div>
  </div>
  )
}

export default CancelPage