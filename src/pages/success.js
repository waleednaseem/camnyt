import React from 'react'




const SuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Payment Successful!</h1>
      <p className="text-lg mb-8 text-gray-700">Thank you for your purchase.</p>
      <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
    </div>
  </div>
  )
}

export default SuccessPage