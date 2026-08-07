import React, { useState } from 'react';
import { Heart, Shield, FileText, X, Cookie, Phone, Mail, MapPin } from 'lucide-react';
import { HOTEL_DATA } from '../data/hotelData';

export default function FooterModal() {
  const [modalType, setModalType] = useState(null);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Col 1: About */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <div className="p-2 rounded-lg bg-pine-700 text-white">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <span className="font-serif text-2xl font-bold">{HOTEL_DATA.name}</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Przytulny pensjonat w sercu Karkonoszy na Osiedlu Skalnym. Oferujemy komfortowe noclegi z widokiem na góry, bezpłatnym pobytem dla zwierząt i rodzinną atmosferą.
              </p>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Szybka nawigacja
              </h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li><a href="#o-hotelu" className="hover:text-amber-400 transition-colors">O hotelu</a></li>
                <li><a href="#pokoje" className="hover:text-amber-400 transition-colors">Pokoje & Apartamenty</a></li>
                <li><a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria zdjęć</a></li>
                <li><a href="#atrakcje" className="hover:text-amber-400 transition-colors">Atrakcje w okolicy</a></li>
                <li><a href="#opinie" className="hover:text-amber-400 transition-colors">Opinie z Booking.com</a></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Kontakt z nami
              </h4>
              <ul className="space-y-3 text-sm text-stone-400">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{HOTEL_DATA.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <a href={`tel:${HOTEL_DATA.phone}`} className="hover:text-white transition-colors">
                    {HOTEL_DATA.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href={`mailto:${HOTEL_DATA.email}`} className="hover:text-white transition-colors">
                    {HOTEL_DATA.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Legal & Compliance */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Polityka & RODO
              </h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>
                  <button 
                    onClick={() => openModal('rodo')}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <Shield className="w-4 h-4 text-pine-500" />
                    <span>Polityka Prywatności & RODO</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('regulamin')}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4 text-pine-500" />
                    <span>Regulamin Pobytu</span>
                  </button>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-stone-800">
                <span className="text-xs text-stone-500 block">
                  Certyfikat jakości: Booking.com (8.9/10)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div>
              © {new Date().getFullYear()} Pensjonat Syriusz. Wszelkie prawa zastrzeżone.
            </div>
            <div className="flex items-center gap-6">
              <span>Projekt i wdrożenie: Arena AI Agents & GitHub Superpowers</span>
              <span>Wersja demo 1.0</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookies Consent Banner */}
      {!cookiesAccepted && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 bg-stone-900/95 text-stone-200 p-5 rounded-2xl shadow-2xl border border-stone-700 z-50 animate-fadeIn">
          <div className="flex items-start gap-3 mb-3">
            <Cookie className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Dbamy o Twoją prywatność</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Używamy plików cookies w celach statystycznych i prawidłowego działania formularzy rezerwacyjnych zgodnie z RODO.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 mt-3">
            <button 
              onClick={() => setCookiesAccepted(true)}
              className="text-xs text-stone-400 hover:text-white px-3 py-1.5"
            >
              Tylko niezbędne
            </button>
            <button 
              onClick={() => setCookiesAccepted(true)}
              className="text-xs font-bold bg-pine-700 hover:bg-pine-600 text-white px-4 py-1.5 rounded-lg transition-colors"
            >
              Akceptuję wszystkie
            </button>
          </div>
        </div>
      )}

      {/* Legal/RODO Modal */}
      {modalType && (
        <div 
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-stone-800 max-w-2xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[80vh] overflow-y-auto relative"
          >
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {modalType === 'rodo' ? (
              <div>
                <div className="flex items-center gap-2 text-pine-800 mb-4">
                  <Shield className="w-6 h-6" />
                  <h3 className="font-serif text-2xl font-bold">Polityka Prywatności i RODO</h3>
                </div>
                <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                  <p>
                    <strong>1. Administrator Danych Osobowych</strong><br />
                    Administratorem Twoich danych osobowych jest Pensjonat Syriusz z siedzibą w Karpaczu przy ul. Reymonta 8, 58-540 Karpacz.
                  </p>
                  <p>
                    <strong>2. Cel przetwarzania danych</strong><br />
                    Dane z formularza kontaktowego (imię, e-mail, telefon) przetwarzamy wyłącznie w celu udzielenia odpowiedzi na zapytanie rezerwacyjne oraz obsługi pobytu gościa zgodnie z art. 6 ust. 1 lit. b RODO.
                  </p>
                  <p>
                    <strong>3. Bezpieczeństwo i prawa gościa</strong><br />
                    Masz prawo do wglądu, poprawiania, sprostowania lub żądania usunięcia swoich danych osobowych w dowolnym momencie. Nigdy nie przekazujemy Twoich danych podmiotom trzecim bez zgody.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-pine-800 mb-4">
                  <FileText className="w-6 h-6" />
                  <h3 className="font-serif text-2xl font-bold">Regulamin Pobytu w Pensjonacie Syriusz</h3>
                </div>
                <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
                  <p>
                    <strong>1. Godziny doby hotelowej</strong><br />
                    Doba hotelowa rozpoczyna się o godzinie 14:00 (lub 13:00 po uzgodnieniu) i trwa do godziny 11:00 w dniu wyjazdu.
                  </p>
                  <p>
                    <strong>2. Zasady pobytu ze zwierzętami (0 zł)</strong><br />
                    Akceptujemy zwierzęta domowe bez dodatkowych opłat. Właściciele odpowiadają za zachowanie czworonoga oraz sprzątanie po nim na terenie ogrodu.
                  </p>
                  <p>
                    <strong>3. Cisza nocna</strong><br />
                    Cisza nocna na terenie pensjonatu obowiązuje w godzinach od 22:00 do 7:00.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-stone-200 text-right">
              <button 
                onClick={closeModal}
                className="bg-pine-700 hover:bg-pine-800 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
