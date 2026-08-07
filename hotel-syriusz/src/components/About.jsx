import React from 'react';
import { Dog, Home, Car, Coffee, Wifi, Sun, CheckCircle, Award } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function About() {
  const iconMap = {
    Dog: Dog,
    Mountain: Home,
    Car: Car,
    Coffee: Coffee,
    Wifi: Wifi,
    Sun: Sun
  };

  return (
    <section id="o-hotelu" className="py-20 bg-stone-50 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-pine-700 bg-pine-100 px-3 py-1 rounded-full">
            Dlaczego warto u nas zamieszkać?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Gościnność i spokój w Karkonoszach
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Pensjonat Syriusz położony jest na wysokości 760 m n.p.m. na uroczym, zalesionym Osiedlu Skalnym w Karpaczu. 
            Naszym celem jest stworzenie domowej, kameralnej atmosfery, w której każdy gość – w tym czworonożni przyjaciele – poczuje się wyjątkowo.
          </p>
        </div>

        {/* Stats Grid - Równe wysokości */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HOTEL_DATA.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm text-center transform transition hover:-translate-y-1 hover:shadow-md flex flex-col justify-center h-full"
            >
              <div className="font-serif text-2xl sm:text-3xl font-bold text-pine-800 mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-stone-800 text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-stone-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Cards Grid - Wymuszona równa wysokość h-full */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOTEL_DATA.benefits.map((benefit, idx) => {
            const IconComponent = iconMap[benefit.icon] || Home;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-pine-100 text-pine-800 flex items-center justify-center mb-6 group-hover:bg-pine-700 group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight callout for Pets 0 zł */}
        <div className="mt-16 bg-gradient-to-r from-pine-900 to-pine-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-full text-xs mb-4">
              <Award className="w-4 h-4" />
              Wyróżnik na tle innych hoteli
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
              Wczasy z psem lub kotem bez dodatkowych opłat!
            </h3>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              Większość hoteli w Karpaczu pobiera od 40 do 100 zł za dobę pobytu zwierzęcia. W Pensjonacie Syriusz zapraszamy z czworonogami całkowicie za darmo. Teren wokół obiektu to las i szlaki idealne na wspólne spacery!
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="#pokoje"
              className="inline-block bg-white text-pine-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-amber-400 hover:text-stone-950 transition-colors"
            >
              Wybierz pokój dla siebie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
