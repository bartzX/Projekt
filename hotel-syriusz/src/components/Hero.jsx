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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with Richer Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          alt="Pensjonat Syriusz w Karpaczu - widok na Karkonosze" 
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow"
        />
        {/* Zoptymalizowany gradient: góra ciemniejsza dla czytelności menu, środek przejrzysty na zdjęcie góry, dół z płynnym przejściem */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-stone-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto w-full">
        {/* Trust & Location Badges Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
          <div className="flex items-center gap-1.5 bg-amber-500 text-stone-950 font-extrabold px-3.5 py-1 rounded-full text-xs sm:text-sm shadow-lg">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Booking.com: {HOTEL_DATA.bookingScore}/10 ({HOTEL_DATA.bookingReviewsCount} opinii)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-pine-700/95 border border-pine-500/50 text-white font-semibold px-3.5 py-1 rounded-full text-xs sm:text-sm shadow-lg backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-current" />
            <span>Przyjazny zwierzętom (0 zł)</span>
          </div>
          <div className="hidden xs:flex items-center gap-1.5 bg-white/15 border border-white/20 backdrop-blur-md text-stone-100 font-medium px-3.5 py-1 rounded-full text-xs sm:text-sm shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{HOTEL_DATA.locationName}</span>
          </div>
        </div>

        {/* Headline - przeprojektowana typografia z lepszym światłem */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 max-w-4xl mx-auto leading-[1.15] text-white drop-shadow-md">
          {HOTEL_DATA.tagline}
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed drop-shadow">
          Wypocznij w sercu Karpacza na ciszy zalesionego Osiedla Skalnego. Ciesz się widokiem na Śnieżkę, domową kuchnią z kominkiem i pobytem z psem za darmo.
        </p>

        {/* ZMODYFIKOWANA CZĘŚĆ REZERWACYJNA - Kompaktowy, ergonomiczny Card (Konsultacja UX/UI & Frontend Agent) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 border border-white/60 text-stone-800 transition-all">
            <form onSubmit={handleSearch} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-end">
              
              {/* Kolumna 1: Zameldowanie (na mobile zajmuje 50% szerokości zamiast całej linii) */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-pine-700" />
                  <span>Zameldowanie</span>
                </label>
                <input 
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-stone-50/90 border border-stone-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-pine-600 focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Kolumna 2: Wymeldowanie (obok zameldowania na mobile) */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-pine-700" />
                  <span>Wymeldowanie</span>
                </label>
                <input 
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-stone-50/90 border border-stone-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-pine-600 focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Kolumna 3: Liczba Gości (na mobile w dolnym rzędzie, zbalansowane) */}
              <div className="text-left">
                <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  <Users className="w-3.5 h-3.5 text-pine-700" />
                  <span>Goście</span>
                </label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-stone-50/90 border border-stone-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-pine-600 focus:bg-white transition-all shadow-inner"
                >
                  <option value="1">1 Osoba</option>
                  <option value="2">2 Osoby (Para)</option>
                  <option value="3">3 Osoby</option>
                  <option value="4">4 Osoby (Rodzina)</option>
                </select>
              </div>

              {/* Kolumna 4: Przycisk CTA */}
              <div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pine-700 to-pine-800 hover:from-pine-800 hover:to-pine-900 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform active:scale-95 group text-xs sm:text-sm"
                >
                  <span>Sprawdź termin</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Pasek korzyści marketingowych (Consultation: Marketing & Conversion Agent) */}
            <div className="mt-3.5 pt-3.5 border-t border-stone-200/70 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-stone-600 font-semibold">
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
