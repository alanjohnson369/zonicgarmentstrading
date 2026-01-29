import { Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HOME', href: '#' },
    { label: 'SHOP', href: '#', hasDropdown: true },
    { label: 'BESPOKE SUIT', href: '#' },
    { label: 'SPECIAL DEALS', href: '#' },
    { label: 'B2B SERVICES', href: '#' },
    { label: 'BLOGS', href: '#' },
    { label: 'CONTACT US', href: '#' },
  ];

  return (
    <header
      className={`bg-white transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-serif italic">Sonic Garments Trading</div>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#111827] hover:text-[#16a34a] transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#16a34a] transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:text-[#16a34a] transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-[#16a34a] transition-colors relative">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
