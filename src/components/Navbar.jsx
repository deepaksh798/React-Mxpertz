import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <Link
          className="px-4 py-2 text-white border border-transparent bg-gray-700 hover:text-white rounded-lg transition duration-300"
          to="/new"
        >
          New
        </Link>
        <Link
          className="px-4 py-2 text-white border border-transparent bg-gray-700 hover:text-white rounded-lg transition duration-300"
          to="/inprogress"
        >
          In Progress
        </Link>
        <Link
          className="px-4 py-2 text-white border border-transparent bg-gray-700 hover:text-white rounded-lg transition duration-300"
          to="/complete"
        >
          Complete
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
