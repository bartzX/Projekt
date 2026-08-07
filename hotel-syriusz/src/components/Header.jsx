import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, MapPin, Heart } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "O hotelu", href: "#o-hotelu" },
    { label: "Pokoje & Ceny", href: "#pokoje" },
    { label: "Galeria", href: "#galeria" },
    { label: "Atrakcje", href: "#atrakcje" },
    { label: "Opinie", href: "#opinie" },
    { label: "Kontakt & Mapa", href: "#kontakt" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-stone-800' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-pine-700 text-white' : 'bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/30'
            }`}>
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight block">
                {HOTEL_DATA.name}
              </span>
              <span className={`text-[10px] tracking-widest uppercase block ${
                isScrolled ? 'text-stone-500' : 'text-stone-200'
              }`}>
                Karpacz • Osiedle Skalne
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? 'text-stone-700' : 'text-stone-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={`tel:${HOTEL_DATA.phone}`} 
              className={`flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>{HOTEL_DATA.phone}</span>
            </a>

            <button 
              onClick={() => onOpenBooking(null)}
              className="flex items-center gap-2 bg-pine-700 hover:bg-pine-800 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Rezerwuj</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-current hover:bg-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-stone-800 shadow-xl border-t border-stone-200 px-4 pt-4 pb-6 mt-3 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-base font-medium hover:bg-pine-50 hover:text-pine-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-stone-100 pt-3 mt-1 flex flex-col gap-2">
              <a 
                href={`tel:${HOTEL_DATA.phone}`} 
                className="flex items-center justify-center gap-2 w-full py-3 bg-stone-100 rounded-lg text-stone-800 font-medium"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Zadzwoń: {HOTEL_DATA.phone}</span>
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(null);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-pine-700 text-white rounded-lg font-medium shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Zarezerwuj pobyt</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
