import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ user, supabase }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchText, setSearchText] = useState(''); // for the search bar

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
              <div className="flex items-center"> {/* Added flex container */}
                {/* Search bar */}
                <div className="relative mr-4">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search..."
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                  />
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966"><path d="M55.146 51.887L41.588 37.786c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.195.202.451.308.707.308a1 1 0 0 0 .707-1.707zM4 23C4 12.163 12.163 4 23 4s19 8.163 19 19-8.163 19-19 19-19-8.163-19-19z"></path></svg>
                  </button>
                </div>

                {/* Create a prompt button */}
                <button className="bg-green-500 text-white rounded-full h-10 w-10 mr-4 flex items-center justify-center">
                  <span className="text-2xl">+</span>
                </button>

                {/* User Dropdown */}
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
                        <Link href="/profile"  role="menuitem" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
