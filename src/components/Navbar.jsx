import React, { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, LogOut, User } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const [isInstallationDropdownOpen, setIsInstallationDropdownOpen] = useState(false);
  const [isSolarDropdownOpen, setIsSolarDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsInstallationDropdownOpen(false);
  };

  const handleNavigation = (path, sectionId) => {
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleInstallationMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsInstallationDropdownOpen(true);
  };

  const handleInstallationMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsInstallationDropdownOpen(false), 300);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileInstallationDropdown = () => {
    setIsInstallationDropdownOpen((prev) => !prev);
  };

  const toggleSolarDropdown = () => {
    setIsSolarDropdownOpen((prev) => !prev);
  };

  const handleLogin = () => {
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
    setIsUserDropdownOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserDropdownOpen && !event.target.closest('.user-dropdown')) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 md:py-4 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
              <span className="text-green-600">Green</span>
              <span className="text-orange-500">Carbon</span>
              <span className="text-gray-800">Hub</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Affordable Solutions</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={handleInstallationMouseEnter}
            onMouseLeave={handleInstallationMouseLeave}
          >
            <button className="flex items-center text-green-600 font-medium bg-transparent focus:outline-none hover:text-orange-500 transition-colors text-sm xl:text-base">
              Installation
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isInstallationDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <div className="relative group">
                    <Link
                      to="/solar-installation"
                      className="flex items-center justify-between px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm cursor-pointer"
                    >
                      <span>Solar Installation</span>
                      <ChevronDown className="ml-1 w-3 h-3" />
                    </Link>
                    <div className="absolute left-full top-4 w-40 bg-white rounded-lg border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link
                        to="/residential"
                        className="block px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors text-sm"
                      >
                        Residential
                      </Link>
                      <Link
                        to="/housing-society"
                        className="block px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors text-sm"
                      >
                        Housing Society
                      </Link>
                      <Link
                        to="/industrial-commercial"
                        className="block px-4 py-2 text-gray-600 hover:text-orange-500 transition-colors text-sm"
                      >
                        Industrial/Commercial
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="/water-management"
                    className="block px-4 py-2 text-black hover:text-orange-500 transition-colors text-sm"
                  >
                    Water & Wastewater Management
                  </Link>

                </div>
              </div>
            )}
          </div>

          <Link
            to="/maintenance"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Maintenance
          </Link>
          <Link
            to="/investments"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            Investments
          </Link>
          <Link
            to="/gch-store"
            className="text-green-600 hover:text-orange-500 transition-colors font-medium text-sm xl:text-base"
          >
            GCH Store
          </Link>
        </nav>

        <div className="hidden lg:block w-32"></div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {isAuthenticated ? (
            <div className="hidden lg:block relative user-dropdown">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 xl:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm xl:text-base"
              >
                <User className="w-4 h-4" />
                <span>{user?.name || 'User'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isUserDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-100">
                      {user?.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="hidden lg:block bg-green-600 hover:bg-green-700 text-white px-4 xl:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm xl:text-base"
            >
              Login
            </button>
          )}

          <button
            className="lg:hidden p-2 rounded-md focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg">
          <Link
            to="/"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <div>
            <button
              className="flex items-center justify-between w-full text-green-600 font-medium hover:text-orange-500 transition-colors text-sm sm:text-base"
              onClick={toggleMobileInstallationDropdown}
            >
              Installation
              <ChevronDown
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isInstallationDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isInstallationDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <div className="relative">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to="/solar-installation"
                      className="flex-1 text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Solar Installation
                    </Link>
                    <button
                      onClick={toggleSolarDropdown}
                      className="ml-2 p-1"
                    >
                      <ChevronDown 
                        className={`w-4 h-4 transform transition-transform ${
                          isSolarDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {isSolarDropdownOpen && (
                    <div className="mt-2 pl-4 space-y-1">
                      <Link
                        to="/residential"
                        className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Residential
                      </Link>
                      <Link
                        to="/housing-society"
                        className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Housing Society
                      </Link>
                      <Link
                        to="/industrial-commercial"
                        className="block text-gray-600 hover:text-orange-500 transition-colors text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Industrial/Commercial
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/water-management"
                  className="block text-black hover:text-orange-500 transition-colors text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Water & Wastewater Management
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/maintenance"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Maintenance
          </Link>
          <Link
            to="/investments"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Investments
          </Link>
          <Link
            to="/gch-store"
            className="block text-green-600 hover:text-orange-500 transition-colors font-medium text-sm sm:text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            GCH Store
          </Link>

          {isAuthenticated ? (
            <div className="space-y-2">
              <div className="px-4 py-2 text-sm text-gray-600 bg-gray-50 rounded-lg">
                <div className="font-medium">{user?.name}</div>
                <div className="text-xs text-gray-500">{user?.email}</div>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;