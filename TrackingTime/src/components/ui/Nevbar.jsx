import React from 'react'
import { useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
const Nevbar = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignInClick = () => {
      setIsSignedIn(true);
    };
  
    const handleLogOutClick = () => {
      setIsSignedIn(false);
    };
  
    return (
      <nav className="p-4 bg-gray-800 text-white flex items-center justify-between px-50">
        <h1 className="text-xl font-semibold">Time Tracker</h1>
        {isSignedIn ? (
          <button 
            onClick={handleLogOutClick} 
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
          >
            Log Out
          </button>
        ) : (
         <Link to="/singin">
                        <Button
                            onClick={handleSignInClick}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                        >
                            Sign In
                        </Button>
         </Link>
        )}
      </nav>
    );
  
}

export default Nevbar