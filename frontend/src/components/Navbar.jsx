import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User, Vault } from 'lucide-react';
import { personalMenu, businessMenu, nriMenu } from '../data/menuData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState('personal');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMenuData = () => {
    switch(activeTab) {
      case 'business': return businessMenu;
      case 'nri': return nriMenu;
      default: return personalMenu;
    }
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setActiveTab('personal'); navigate('/personal'); }}
              className={`hover:text-teal-200 transition-colors ${
                activeTab === 'personal' ? 'font-semibold' : ''
              }`}>
              Personal
            </button>
            <button 
              onClick={() => { setActiveTab('business'); navigate('/business'); }}
              className={`hover:text-teal-200 transition-colors ${
                activeTab === 'business' ? 'font-semibold' : ''
              }`}>
              Business
            </button>
            <button 
              onClick={() => { setActiveTab('nri'); navigate('/nri'); }}
              className={`hover:text-teal-200 transition-colors ${
                activeTab === 'nri' ? 'font-semibold' : ''
              }`}>
              NRI
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-teal-200 transition-colors">About Us</Link>
            <Link to="/learn" className="hover:text-teal-200 transition-colors">Learn</Link>
            <Link to="/help" className="hover:text-teal-200 transition-colors">Help</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-teal-600 to-cyan-600 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                <Vault className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Digital Vault
                </div>
                <div className="text-xs text-gray-500">Banking Solutions</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {getMenuData().map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-4 py-6 flex items-center gap-1 text-gray-700 hover:text-teal-600 transition-colors font-medium">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === index && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden">
                      {item.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition-colors group"
                        >
                          {subItem.icon && (
                            <div className="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors">
                              <subItem.icon className="w-5 h-5 text-teal-600" />
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-800 group-hover:text-teal-600">
                              {subItem.name}
                            </div>
                            {subItem.description && (
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all flex items-center gap-2">
                <User className="w-4 h-4" />
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-4">
            {getMenuData().map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="font-semibold text-gray-800 flex items-center gap-2">
                  {item.icon && <item.icon className="w-5 h-5 text-teal-600" />}
                  {item.title}
                </div>
                <div className="pl-4 space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="flex items-center gap-2 py-2 text-gray-600 hover:text-teal-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.icon && <subItem.icon className="w-4 h-4" />}
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <User className="w-4 h-4" />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;