import { Search, User, Heart, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'SHOP', path: '/shop', hasDropdown: true },
    { label: 'BESPOKE SUIT', path: '#' },
    { label: 'SPECIAL DEALS', path: '/special-deals' },
    { label: 'B2B SERVICES', path: '/b2b-services' },
    { label: 'BLOGS', path: '#' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header
      className={`bg-white transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif italic">
            Just Needles
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.path.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-sm font-medium text-[#111827] hover:text-[#16a34a] transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors flex items-center gap-1 ${
                      isActive ? 'text-[#16a34a] border-b-2 border-[#16a34a]' : 'text-[#111827] hover:text-[#16a34a]'
                    }`
                  }
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#16a34a] transition-colors hidden lg:block">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-[#16a34a] transition-colors hidden lg:block">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-[#16a34a] transition-colors relative hidden lg:block">
              <Heart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#111827] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:text-[#16a34a] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#111827] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) =>
                item.path.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.path}
                    className="text-sm font-medium text-[#111827] hover:text-[#16a34a] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${
                        isActive ? 'text-[#16a34a]' : 'text-[#111827] hover:text-[#16a34a]'
                      }`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
