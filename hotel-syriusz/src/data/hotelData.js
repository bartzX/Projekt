export const HOTEL_DATA = {
  name: "Pensjonat Syriusz",
  tagline: "Twój ciepły dom w Karkonoszach z widokiem na góry",
  address: "ul. Reymonta 8, 58-540 Karpacz",
  locationName: "Osiedle Skalne (760 m n.p.m.)",
  phone: "+48 607 123 456",
  email: "rezerwacje@pensjonatsyriusz.pl",
  bookingScore: 8.9,
  bookingReviewsCount: 335,
  stats: [
    { label: "Ocena na Booking.com", value: "8.9 / 10", desc: "Kategoria Znakomity" },
    { label: "Wysokość n.p.m.", value: "760 m", desc: "Klimatyczne Osiedle Skalne" },
    { label: "Zwierzęta domowe", value: "0 zł", desc: "Pobyt z psem/kotem gratis" },
    { label: "Do wyciągów", value: "10 min", desc: "Spacer do stacji narciarskich" }
  ],
  benefits: [
    {
      title: "Przyjazny zwierzętom (0 zł)",
      description: "Kochamy czworonogi! Twój pies lub kot przebywa u nas całkowicie bezpłatnie – bez ukrytych opłat.",
      icon: "Dog"
    },
    {
      title: "Cisza i widok na góry",
      description: "Położenie na zalesionym Osiedlu Skalnym zapewnia ciszę, spokój i wspaniałą panoramę Karkonoszy.",
      icon: "Mountain"
    },
    {
      title: "Bezpłatny zamykany parking",
      description: "Bezpieczny, prywatny parking samochodowy na ogrodzonym terenie pensjonatu dostępny dla wszystkich gości.",
      icon: "Car"
    },
    {
      title: "Jadalnia z kominkiem",
      description: "Przepyszne, obfite śniadania w formie bufetu i obiadokolacje serwowane przy cieple kominka.",
      icon: "Coffee"
    },
    {
      title: "Szybkie Wi-Fi & Smart TV",
      description: "Stabilne łącze światłowodowe we wszystkich pokojach oraz telewizja satelitarna.",
      icon: "Wifi"
    },
    {
      title: "Ogród z grzybowiskiem i grillem",
      description: "Duży zielony teren z leżakami, tarasem słonecznym, miejscem na ognisko i piaskownicą dla dzieci.",
      icon: "Sun"
    }
  ],
  rooms: [
    {
      id: "dwuosobowy",
      name: "Pokój Dwuosobowy z Balkonem",
      capacity: "2 osoby",
      size: "18 m²",
      price: "180",
      description: "Przytulny pokój dla par lub przyjaciół z wyjściem na słoneczny balkon z widokiem na las i szczyty Karkonoszy.",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      amenities: [
        "Prywatna łazienka z prysznicem",
        "Balkon z widokiem na góry",
        "Szybkie Wi-Fi & TV-SAT",
        "Czajnik elektryczny",
        "Drewniane parkiety",
        "Zwierzęta bez opłat"
      ]
    },
    {
      id: "trzyosobowy",
      name: "Pokój Trzyosobowy Comfort",
      capacity: "3 osoby",
      size: "24 m²",
      price: "250",
      description: "Przestronny pokój dla rodziny z dzieckiem z wygodną strefą wypoczynkową i dużym oknem panoramicznym.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      amenities: [
        "Prywatna łazienka z prysznicem",
        "1 łóżko podwójne + 1 pojedyncze",
        "Szybkie Wi-Fi & TV-SAT",
        "Stolik kawowy z fotelami",
        "Czajnik i zestaw herbat",
        "Zwierzęta bez opłat"
      ]
    },
    {
      id: "studio",
      name: "Studio Rodzinne (2 pokoje)",
      capacity: "4 osoby",
      size: "35 m²",
      price: "340",
      description: "Idealne rozwiązanie dla rodzin z dziećmi lub grupy znajomych. Dwa oddzielne pokoje z prywatną łazienką i korytarzem.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
      amenities: [
        "2 oddzielne sypialnie",
        "Prywatna łazienka rodzinna",
        "Szybkie Wi-Fi & 2x TV-SAT",
        "Lodówka na korytarzu",
        "Duży balkon z krzesłami",
        "Zwierzęta bez opłat"
      ]
    }
  ],
  gallery: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      caption: "Pensjonat Syriusz - Klimatyczna fasada i otoczenie lasu",
      category: "Otoczenie"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      caption: "Pokój Dwuosobowy z wygodnym łożem małżeńskim",
      category: "Pokoje"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      caption: "Nasza przytulna jadalnia z kominkiem na wieczorne obiadokolacje",
      category: "Jadalnia"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      caption: "Jasne wnętrze Pokoju Comfort z elementami drewna",
      category: "Pokoje"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      caption: "Taras słoneczny i ogród z miejscem na grilla",
      category: "Otoczenie"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      caption: "Studio Rodzinne - przestrzeń dla całych rodzin",
      category: "Pokoje"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      caption: "Widok na szczyty Karkonoszy podczas górskich spacerów",
      category: "Otoczenie"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
      caption: "Zimowy pejzaż Karpacza – raj dla narciarzy i spacerowiczów",
      category: "Otoczenie"
    }
  ],
  attractions: [
    {
      name: "Kościół Wang",
      distance: "3.7 km",
      time: "8 min autem / 40 min spacerem",
      desc: "Słynny zabytkowy norweski kościół klepkowy z XII wieku – symbol Karpacza i punkt startowy na Śnieżkę.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Miasteczko Western City",
      distance: "2.5 km",
      time: "6 min autem / 25 min spacerem",
      desc: "Park rozrywki w klimacie Dzikiego Zachodu w Ścięgnach koło Karpacza – pokazy kowbojów i jazda konna.",
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Krucze Skały & Szlaki Górskie",
      distance: "1.5 km",
      time: "15 min spacerem",
      desc: "Malownicza grupa skalna nad potokiem Płomnica. Doskonałe miejsce na spacer i wspinaczkę.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Wyciągi Narciarskie & Kopa",
      distance: "800 m",
      time: "10 min spacerem",
      desc: "Zimą raj dla narciarzy i snowboardzistów. Najbliższe orczyki i stacje znajdują się zaledwie 10 minut piechotą.",
      image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80"
    }
  ],
  reviews: [
    {
      author: "Patrycja, Polska",
      source: "Booking.com",
      rating: "10 / 10",
      date: "Sierpień 2025",
      text: "Bardzo fajna lokalizacja, blisko do miasta. Pensjonat przyjazny zwierzakom i nie jest pobierana za nie opłata! Właściciele bardzo uprzejmi i pomocni 💗"
    },
    {
      author: "Anička, Czechy",
      source: "Booking.com",
      rating: "10 / 10",
      date: "Lipiec 2025",
      text: "Pan przy przyjeździe polecił nam wspaniałe trasy górskie. Perfekcyjna obsługa, bardzo czyste pokoje i domowa atmosfera. Doporučujeme!"
    },
    {
      author: "Robert, Polska",
      source: "Booking.com",
      rating: "9.6 / 10",
      date: "Wrzesień 2025",
      text: "Bardzo miła i pomocna obsługa, przepyszne śniadania i widok na góry. Położenie pensjonatu w cichej okolicy z dala od zgiełku. Gorąco polecam."
    }
  ],
  policies: {
    checkIn: "od 14:00 do 21:00",
    checkOut: "do 11:00",
    pets: "Akceptujemy zwierzęta domowe (psy i koty) całkowicie BEZPŁATNIE.",
    parking: "Bezpłatny, prywatny zamykany parking dla gości na terenie pensjonatu.",
    breakfast: "Śniadania w formie bufetu serwowane w godzinach 8:00 – 10:00 (15–30 zł). Obiadokolacje 16:00 – 18:00."
  }
};
