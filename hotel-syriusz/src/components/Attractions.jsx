import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function Attractions() {
  return (
    <section id="atrakcje" className="py-20 bg-stone-100/70 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            Atrakcje w Okolicy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6 text-stone-900">
            Co zwiedzić w Karpaczu?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Pensjonat Grań to wspaniała baza wypadowa w Karkonosze. Poznaj najciekawsze miejsca położone w promieniu zaledwie kilku minut spaceru lub jazdy samochodem.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOTEL_DATA.attractions.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden">
                <img loading="lazy" decoding="async" 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-stone-500 mb-2">
                    <span className="flex items-center gap-1 text-pine-700">
                      <MapPin className="w-4 h-4" />
                      {item.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-stone-400">Polecane przez naszych gości</span>
                  <span className="text-xs font-bold text-pine-700 group-hover:underline flex items-center gap-1">
                    Zobacz na mapie
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
