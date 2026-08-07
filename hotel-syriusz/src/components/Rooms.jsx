import React from 'react';
import { Users, Maximize2, Check, Calendar, ArrowRight } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Rooms({ onOpenBooking }) {
  return (
    <section id="pokoje" className="py-20 bg-stone-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            Oferta Pokoi & Apartamentów
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6 text-stone-900">
            Komfortowe pokoje w górskim stylu
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Każdy z naszych pokoi wyposażony jest w prywatną łazienkę, szybkie Wi-Fi, telewizję satelitarną oraz zestaw do parzenia kawy i herbaty.
          </p>
        </div>

        {/* Rooms Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HOTEL_DATA.rooms.map((room) => (
            <div 
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Room Photo */}
              <div className="relative h-64 overflow-hidden">
                <img loading="lazy" decoding="async" 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-stone-800 shadow">
                  od {room.price} zł / doba
                </div>
              </div>

              {/* Room Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Stats Badges */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-pine-700" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-4 h-4 text-pine-700" />
                      {room.size}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                    {room.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Amenities List */}
                  <div className="space-y-2 mb-8">
                    {room.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-stone-700">
                        <Check className="w-4 h-4 text-pine-700 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer / CTA */}
                <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-500 block">Cena przy rezerwacji online:</span>
                    <span className="font-serif text-2xl font-bold text-pine-900">{room.price} zł</span>
                    <span className="text-xs text-stone-500"> / noc</span>
                  </div>
                  <button 
                    onClick={() => onOpenBooking({ room: room.id })}
                    className="bg-pine-700 hover:bg-pine-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow hover:shadow-lg flex items-center gap-2"
                  >
                    <span>Rezerwuj</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Included features note */}
        <div className="mt-12 text-center text-sm text-stone-500">
          * W cenie pobytu: darmowy parking, szybkie Wi-Fi, opłata za zwierzęta domowe (0 zł) oraz nieograniczony dostęp do ogrodu z tarasem.
        </div>
      </div>
    </section>
  );
}
