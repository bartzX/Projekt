import React, { useState } from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["Wszystkie", "Pokoje", "Otoczenie", "Jadalnia"];

  const filteredPhotos = selectedCategory === "Wszystkie" 
    ? HOTEL_DATA.gallery 
    : HOTEL_DATA.gallery.filter(item => item.category === selectedCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-stone-50 text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-pine-700 bg-pine-100 px-3 py-1 rounded-full">
            Nasza Galeria
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Zobacz Pensjonat Syriusz z bliska
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Zapoznaj się ze zdjęciami naszych wnętrz, pokoi, jadalni z kominkiem oraz malowniczego otoczenia Osiedla Skalnego w Karpaczu.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-10">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-pine-800 text-white shadow-md' 
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div 
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer bg-stone-200 shadow-sm hover:shadow-xl transition-all h-64"
            >
              <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-xs text-amber-400 font-semibold mb-1 uppercase tracking-wider">
                  {photo.category}
                </span>
                <p className="text-sm font-medium leading-snug">
                  {photo.caption}
                </p>
              </div>
              <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-stone-800">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button 
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main image */}
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={filteredPhotos[lightboxIndex].url} 
              alt={filteredPhotos[lightboxIndex].caption}
              className="max-h-[70vh] w-auto rounded-xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-lg font-serif font-medium">
                {filteredPhotos[lightboxIndex].caption}
              </p>
              <span className="text-xs text-stone-400">
                Zdjęcie {lightboxIndex + 1} z {filteredPhotos.length}
              </span>
            </div>
          </div>

          {/* Next button */}
          <button 
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
