import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function ReviewsSection() {
  return (
    <section id="opinie" className="py-20 bg-pine-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
            Opinie z Booking.com
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Zaufanie naszych Gości
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Szeroki uśmiech, domowa atmosfera i pobyt z psami bez dopłat sprawiają, że wracacie do nas co roku.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTEL_DATA.reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-pine-900/60 rounded-3xl p-8 border border-pine-800 backdrop-blur-sm shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="bg-pine-800 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-pine-700">
                    {review.rating}
                  </span>
                </div>
                <Quote className="w-8 h-8 text-pine-600 mb-4 opacity-50" />
                <p className="text-stone-200 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="border-t border-pine-800 pt-4 flex items-center justify-between text-xs text-stone-400">
                <span className="font-bold text-white">{review.author}</span>
                <span>{review.source} • {review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Booking.com badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-pine-900 px-6 py-3 rounded-full border border-pine-800">
            <span className="text-sm font-semibold text-stone-300">Ogólna ocena na Booking.com:</span>
            <span className="bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded-lg text-sm">
              8.9 / 10 Znakomity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
