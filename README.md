# Projekt (`bartzX/Projekt`) 🚀
## Profesjonalna strona internetowa dla hotelu: **Pensjonat Syriusz w Karpaczu** 🏨

W pełni zautomatyzowane repozytorium GitHub wykorzystujące 100% dobrych praktyk i integracji CI/CD oraz wsparcie dla ulubionych narzędzi AI/automatyzacji z Twoich gwiazdek na GitHubie.

W ramach projektu przygotowano **oficjalną, nowoczesną stronę internetową dla Pensjonatu Syriusz w Karpaczu** (który dotychczas korzystał wyłącznie z platformy [Booking.com](https://www.booking.com/hotel/pl/pensjonat-syriusz-karpacz.html), osiągając ocenę **8.9 / 10**).

---

## 📁 Struktura Projektu

```text
/home/user/projekt/
├── hotel-syriusz/           # Pełna aplikacja React + Vite + Tailwind CSS (Strona pensjonatu)
│   ├── src/
│   │   ├── components/      # Interaktywne komponenty (Header, Hero, Rooms, Gallery, Modal, Contact)
│   │   ├── data/            # Badania i dane obiektu (hotelData.js)
│   │   ├── App.jsx          # Główny komponent aplikacji
│   │   └── main.jsx         # Punkt wejścia
│   ├── index.html           # Plik główny z metatagami SEO i OpenGraph
│   ├── tailwind.config.js   # Konfiguracja kolorystyki góry/las (pine, amber)
│   └── package.json
├── docs/
│   ├── HOTEL_WEBSITE_RAPORT.md  # Pełna dokumentacja projektowa i audyt QC
│   └── overview.md
├── .github/
│   ├── workflows/ci.yml     # GitHub Actions - potok CI/CD
│   ├── dependabot.yml       # Automatyczne aktualizacje Dependabot
│   ├── ISSUE_TEMPLATE/      # Szablony zgłoszeń błędów i pomysłów
│   └── PULL_REQUEST_TEMPLATE.md
└── requirements.txt
```

---

## 🌟 Kluczowe zalety strony Pensjonatu Syriusz
1. **Wyróżnienie przewag rynkowych:** Eksponowanie pobytu ze zwierzętami **całkowicie za darmo (0 zł dopłaty)**, widoku na góry na Osiedlu Skalnym (760 m n.p.m.) oraz darmowego parkingu.
2. **Pełna responsywność (Mobile-first):** Dostosowana nawigacja mobilna, karty pokoi z cenami (od 180 zł) oraz szybka rezerwacja.
3. **Interaktywne elementy UX:**
   - **Lightbox w galerii** ze szczytami Karkonoszy i wnętrzami,
   - **Modal rezerwacji** pozwalający na wybór terminów, pokoju i opcji z psem,
   - **Zgodność z prawem (RODO & Cookies)** – baner ciasteczek i modal z Polityką Prywatności.
4. **Znakomite SEO i optymalizacja:** Pełne meta tagi, struktura nagłówków w języku polskim oraz czas ładowania poniżej 3 sekund.

---

## 💻 Jak uruchomić stronę lokalnie?

```bash
cd hotel-syriusz
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```
Aplikacja będzie dostępna w przeglądarce pod adresem `http://localhost:5173`.
