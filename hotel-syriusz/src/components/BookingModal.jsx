import React, { useState } from 'react';
import { X, Calendar, CheckCircle, ShieldCheck, Dog, User } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function BookingModal({ initialData, onClose }) {
  const [room, setRoom] = useState(initialData?.room || 'dwuosobowy');
  const [checkIn, setCheckIn] = useState(initialData?.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialData?.checkOut || '');
  const [guests, setGuests] = useState(initialData?.guests || '2');
  const [pets, setPets] = useState(true);
  const [step, setStep] = useState('form'); // form | success

  const selectedRoomObj = HOTEL_DATA.rooms.find(r => r.id === room) || HOTEL_DATA.rooms[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-stone-800 max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {step === 'success' ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-pine-100 text-pine-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Rezerwacja wstępna potwierdzona!
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              Dziękujemy za wybór <strong>{HOTEL_DATA.name}</strong>. Wysłaliśmy potwierdzenie wstępne na Twój adres e-mail wraz z instrukcją zameldowania.
            </p>
            <div className="bg-stone-50 p-4 rounded-xl text-left text-xs space-y-2 border border-stone-200 mb-6">
              <div><strong>Wybrany pokój:</strong> {selectedRoomObj.name}</div>
              <div><strong>Liczba gości:</strong> {guests} os.</div>
              
              <div><strong>Termin:</strong> {checkIn || 'Do ustalenia'} – {checkOut || 'Do ustalenia'}</div>
            </div>
            <button 
              onClick={onClose}
              className="w-full bg-pine-700 hover:bg-pine-800 text-white font-bold py-3 rounded-xl transition-colors shadow"
            >
              Zamknij i powróć do strony
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-pine-800 mb-2">
              <Calendar className="w-6 h-6" />
              <h3 className="font-serif text-2xl font-bold">Zarezerwuj pobyt</h3>
            </div>
            <p className="text-stone-500 text-xs mb-6">
              Gwarantujemy najniższą cenę przy rezerwacji bezpośredniej i bliskość stoku.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                  Wybierz rodzaj pokoju
                </label>
                <select 
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-pine-500"
                >
                  {HOTEL_DATA.rooms.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.name} – od {r.price} zł/doba
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                    Data przyjazdu
                  </label>
                  <input 
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                    Data wyjazdu
                  </label>
                  <input 
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                    Liczba Gości
                  </label>
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2.5 text-sm font-medium"
                  >
                    <option value="1">1 Osoba</option>
                    <option value="2">2 Osoby</option>
                    <option value="3">3 Osoby</option>
                    <option value="4">4 Osoby</option>
                  </select>
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-pine-900">
                    <input 
                      type="checkbox"
                      checked={pets}
                      onChange={(e) => setPets(e.target.checked)}
                      className="rounded text-pine-700 w-4 h-4"
                    />
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-pine-700" />
                      Bufet w cenie
                    </span>
                  </label>
                </div>
              </div>

              {/* Price estimation box */}
              <div className="bg-pine-50 border border-pine-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-600 block">Cena za dobę dla tego pokoju:</span>
                  <span className="font-serif text-2xl font-bold text-pine-900">{selectedRoomObj.price} zł</span>
                </div>
                <div className="text-right text-xs text-pine-800 font-semibold">
                  <span>W cenie: Wi-Fi, Parking</span><br/>
                  <span>i widok na Karkonosze</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-stone-600 mb-1">
                  Adres e-mail do potwierdzenia *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="twój@email.pl"
                  className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pine-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-pine-700 hover:bg-pine-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Potwierdź rezerwację (demo)</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
