'use client';
// Modal.js

import React, { useState } from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-xs w-full">
        <h2 className="text-2xl font-bold mb-4">Unlock All Features</h2>
        <img src={lock} alt="Lock icon" className="mx-auto mb-4" />
        <div className="text-center">
          <p>Your content goes here...</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Login with Google</button>
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-full mt-2">Login with Facebook</button>
        </div>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
