import React from 'react';
import { Heart, Home, Phone, Info } from 'lucide-react';

type NavbarProps = {
  onDonate?: () => void;
};

export function Navbar({ onDonate }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-semibold">HopeInAction</span>
          </div>
          <div className="flex space-x-8">
            <NavLink icon={<Home size={18} />} text="Home" href="/" />
            <NavLink icon={<Info size={18} />} text="About" href="#about" />
            <NavLink icon={<Phone size={18} />} text="Contact" href="#contact" />
            <button 
              onClick={onDonate}
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition-colors"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-gray-600 hover:text-rose-500 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}