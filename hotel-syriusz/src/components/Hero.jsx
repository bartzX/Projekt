import React, { useState } from 'react';
import { Star, MapPin, Calendar, Users, ShieldCheck, Heart, Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Image with Richer Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          alt="Pensjonat Syriusz w Karpaczu - widok na Karkonosze" 
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-stone-900/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto w-full flex flex-col items-center justify-center">
        {/* Trust & Location Badges Bar - Zwiększony odstęp górny pt-32 by nie chować pod menu */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 max-w-3xl">
          <div className="flex items-center justify-center gap-1.5 bg-amber-500 text-stone-950 font-extrabold px-3.5 h-8 rounded-full text-xs sm:text-sm shadow-lg">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Booking.com: {HOTEL_DATA.bookingScore}/10 ({HOTEL_DATA.bookingReviewsCount} opinii)</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-pine-700/95 border border-pine-500/50 text-white font-semibold px-3.5 h-8 rounded-full text-xs sm:text-sm shadow-lg backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-current" />
            <span>Przyjazny zwierzętom (0 zł)</span>
          </div>
          <div className="hidden xs:flex items-center justify-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-md text-stone-100 font-medium px-3.5 h-8 rounded-full text-xs sm:text-sm shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{HOTEL_DATA.locationName}</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 max-w-4xl mx-auto leading-[1.15] text-white drop-shadow-md">
          {HOTEL_DATA.tagline}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed drop-shadow">
          Wypocznij w sercu Karpacza na ciszy zalesionego Osiedla Skalnego. Ciesz się widokiem na Śnieżkę, domową kuchnią z kominkiem i pobytem z psem za darmo.
        </p>

        {/* ZMODYFIKOWANA CZĘŚĆ REZERWACYJNA - Perfekcyjna symetria (h-12 na każdy element, gap-3/4 i czytelne obramowanie) */}
        <div className="max-w-4xl mx-auto w-full">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-6 border border-white/60 text-stone-800 transition-all">
            <form onSubmit={handleSearch} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-end">
              
              {/* Kolumna 1: Zameldowanie */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-pine-700" />
                  <span>Zameldowanie</span>
                </label>
                <div className="relative w-full">
                  <input 
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full h-12 bg-stone-50 border-2 border-stone-200/90 rounded-xl px-3 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:border-pine-600 transition-all shadow-sm block appearance-none"
                  />
                </div>
              </div>

              {/* Kolumna 2: Wymeldowanie */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-pine-700" />
                  <span>Wymeldowanie</span>
                </label>
                <div className="relative w-full">
                  <input 
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full h-12 bg-stone-50 border-2 border-stone-200/90 rounded-xl px-3 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:border-pine-600 transition-all shadow-sm block appearance-none"
                  />
                </div>
              </div>

              {/* Kolumna 3: Liczba Gości */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1.5">
                  <Users className="w-3.5 h-3.5 text-pine-700" />
                  <span>Goście</span>
                </label>
                <div className="relative w-full">
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full h-12 bg-stone-50 border-2 border-stone-200/90 rounded-xl px-3 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:border-pine-600 transition-all shadow-sm block"
                  >
                    <option value="1">1 Osoba</option>
                    <option value="2">2 Osoby (Para)</option>
                    <option value="3">3 Osoby</option>
                    <option value="4">4 Osoby (Rodzina)</option>
                  </select>
                </div>
              </div>

              {/* Kolumna 4: Przycisk CTA */}
              <div className="w-full">
                <button 
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-pine-700 to-pine-800 hover:from-pine-800 hover:to-pine-900 text-white font-bold px-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-95 group text-xs sm:text-sm"
                >
                  <span>Sprawdź termin</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Pasek korzyści marketingowych */}
            <div className="mt-4 pt-4 border-t border-stone-200/70 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-stone-600 font-semibold">
              <span className="flex items-center gap-1.5 text-pine-800">
                <CheckCircle2 className="w-4 h-4 text-pine-600 flex-shrink-0" />
                <span>Gwarancja najniższej ceny bezpośrednio</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Zwierzęta w cenie (0 zł dopłaty)</span>
              </span>
              <span className="hidden xs:flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-pine-600 flex-shrink-0" />
                <span>Darmowy parking zamykany</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
