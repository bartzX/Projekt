import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, ShieldCheck, Heart, Award } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = (e) => {
    e.preventDefault();
    onOpenBooking({
      checkIn,
      checkOut,
      guests
    });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          alt="Pensjonat Syriusz w Karpaczu - widok na Karkonosze" 
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
        {/* Badges Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6">
          <div className="flex items-center gap-1.5 bg-amber-500/90 text-stone-950 font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm shadow-md">
            <Star className="w-4 h-4 fill-current" />
            <span>Booking.com: {HOTEL_DATA.bookingScore}/10 ({HOTEL_DATA.bookingReviewsCount} opinii)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-pine-800/90 border border-pine-600 text-white font-medium px-3.5 py-1.5 rounded-full text-xs sm:text-sm shadow-md">
            <Heart className="w-4 h-4 text-rose-400 fill-current" />
            <span>Przyjazny zwierzętom (0 zł)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white font-medium px-3.5 py-1.5 rounded-full text-xs sm:text-sm shadow-md">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{HOTEL_DATA.locationName}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          {HOTEL_DATA.tagline}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Wypocznij w sercu Karpacza w ciszy zalesionego Osiedla Skalnego. Ciesz się widokiem na Śnieżkę, domową kuchnią z kominkiem i pobytem z czworonożnym przyjacielem za darmo.
        </p>

        {/* Quick Booking Form Bar */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 text-stone-800">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Zameldowanie
              </label>
              <input 
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pine-500"
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Wymeldowanie
              </label>
              <input 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pine-500"
              />
            </div>

            <div className="text-left">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Goście
              </label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-stone-100 border border-stone-200 rounded-lg px-3 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pine-500"
              >
                <option value="1">1 Osoba</option>
                <option value="2">2 Osoby (Para)</option>
                <option value="3">3 Osoby</option>
                <option value="4">4 Osoby (Rodzina)</option>
              </select>
            </div>

            <div>
              <button 
                type="submit"
                className="w-full bg-pine-700 hover:bg-pine-800 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Sprawdź termin</span>
              </button>
            </div>
          </form>

          {/* Quick trust badges below search */}
          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-pine-700" />
              Gwarancja najniższej ceny przy rezerwacji bezpośredniej
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              Brak dodatkowych opłat za zwierzęta i parking
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
