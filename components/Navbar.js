import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ user, supabase }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <nav className="bg-blue-800 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-semibold">
              Prompt Finder
            </Link>
          </div>

          <div className="flex items-center">
            {user ? (
              <div className="relative inline-block text-left">
                <button
                  onClick={handleDropdownToggle}
                  type="button"
                  className="text-white font-medium"
                >
                  {user.email.split('@')[0]}
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <Link href="/profile" role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-white font-medium">
                  Login
                </Link>
                <Link href="/signup" className="text-white font-medium">
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
