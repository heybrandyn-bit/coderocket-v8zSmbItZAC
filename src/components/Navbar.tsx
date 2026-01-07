import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C1810]/95 backdrop-blur-sm border-b border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#F4E4C1] cursor-pointer hover:text-[#D4A574] transition-colors">
              Alpha Reply Company
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-8">
              <a href="/#services" className="text-[#F4E4C1] hover:text-[#D4A574] transition-colors cursor-pointer">Services</a>
              <a href="/#about" className="text-[#F4E4C1] hover:text-[#D4A574] transition-colors cursor-pointer">About</a>
              <a href="/#contact" className="text-[#F4E4C1] hover:text-[#D4A574] transition-colors cursor-pointer">Contact</a>
              <a href="/#contact" className="bg-[#D4A574] text-[#2C1810] px-6 py-2 rounded-md hover:bg-[#E8C792] transition-colors cursor-pointer font-semibold">
                Get Started
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#F4E4C1] hover:text-[#D4A574] cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#2C1810] border-t border-[#D4A574]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="/#services" className="block text-[#F4E4C1] hover:text-[#D4A574] py-2 cursor-pointer">Services</a>
            <a href="/#about" className="block text-[#F4E4C1] hover:text-[#D4A574] py-2 cursor-pointer">About</a>
            <a href="/#contact" className="block text-[#F4E4C1] hover:text-[#D4A574] py-2 cursor-pointer">Contact</a>
            <a href="/#contact" className="block bg-[#D4A574] text-[#2C1810] px-6 py-2 rounded-md hover:bg-[#E8C792] transition-colors cursor-pointer font-semibold text-center">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}