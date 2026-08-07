import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Dog, Car } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function ContactMap() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    dates: '',
    roomType: 'dwuosobowy'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Symulacja pomyślnego wysłania wiadomości w podglądzie
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        dates: '',
        roomType: 'dwuosobowy'
      });
    }, 5000);
  };

  return (
    <section id="kontakt" className="py-20 bg-white text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-pine-700 bg-pine-100 px-3 py-1 rounded-full">
            Kontakt & Rezerwacje
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 mb-6">
            Napisz do nas lub zadzwoń
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Chętnie odpowiemy na wszystkie pytania dotyczące dostępności pokoi, wyżywienia, wyżywienia czy dojazdu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact details & map column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/80 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Dane kontaktowe
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pine-100 text-pine-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-stone-400">Adres pensjonatu</h4>
                  <p className="font-medium text-stone-900">{HOTEL_DATA.name}</p>
                  <p className="text-sm text-stone-600">{HOTEL_DATA.address}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{HOTEL_DATA.locationName}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pine-100 text-pine-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-stone-400">Telefon rezerwacyjny</h4>
                  <a href={`tel:${HOTEL_DATA.phone}`} className="font-semibold text-lg text-pine-800 hover:underline">
                    {HOTEL_DATA.phone}
                  </a>
                  <p className="text-xs text-stone-500">Codziennie w godz. 8:00 – 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-pine-100 text-pine-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase text-stone-400">E-mail</h4>
                  <a href={`mailto:${HOTEL_DATA.email}`} className="font-medium text-stone-800 hover:underline">
                    {HOTEL_DATA.email}
                  </a>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 grid grid-cols-2 gap-4 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pine-700" />
                  <span>Check-in: 14:00-21:00<br/>Check-out: do 11:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pine-700" />
                  <span>Śniadania w bufecie<br/>Parking darmowy</span>
                </div>
              </div>
            </div>

            {/* Google Map preview */}
            <div className="bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 shadow-sm h-64 relative">
              <iframe 
                title="Mapa lokalizacji Pensjonat Grań Karpacz"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.3298!2d15.7756!3d50.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecad000000001%3A0x0!2sReymonta%208%2C%2058-540%20Karpacz!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" 
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-800 shadow">
                Osiedle Skalne • Karpacz
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 p-8 sm:p-10 rounded-3xl border border-stone-200/80 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Wyślij zapytanie o wolne terminy
              </h3>
              <p className="text-stone-600 text-sm mb-6">
                Wypełnij formularz poniżej. Otrzymasz informację o dostępności oraz wycenę pobytu w ciągu kilku godzin.
              </p>

              {submitted ? (
                <div className="bg-pine-100 border border-pine-300 text-pine-900 p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-pine-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base mb-1">Dziękujemy za przesłanie zapytania!</h4>
                    <p className="text-sm">
                      Twoja wiadomość została zarejestrowana. Nasz zespół skontaktuje się z Tobą telefonicznie lub e-mailowo w najkrótszym możliwym czasie.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Imię i Nazwisko *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="np. Jan Kowalski"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Adres E-mail *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="np. jan@example.pl"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Telefon kontaktowy *
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="np. +48 600 000 000"
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                        Preferowany pokój
                      </label>
                      <select 
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                        className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                      >
                        <option value="dwuosobowy">Pokój Dwuosobowy z Balkonem (od 180 zł)</option>
                        <option value="trzyosobowy">Pokój Trzyosobowy Comfort (od 250 zł)</option>
                        <option value="studio">Studio Rodzinne 4-osobowe (od 340 zł)</option>
                        <option value="inny">Nie mam pewności / zapytanie ogólne</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Planowane daty pobytu lub uwagi
                    </label>
                    <input 
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      placeholder="np. 15-20 września 2026, dwoje dorosłych, pokój z widokiem"
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                      Treść wiadomości *
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Napisz, czy potrzebujesz śniadań, wyżywienia, czy preferujesz balkon..."
                      className="w-full bg-white border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-stone-500">
                    <input type="checkbox" required className="mt-0.5 rounded text-pine-700" />
                    <span>
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Pensjonat Grań w celu obsługi zapytania rezerwacyjnego zgodnie z RODO i Polityką Prywatności.
                    </span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-pine-700 hover:bg-pine-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Wyślij zapytanie rezerwacyjne</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
