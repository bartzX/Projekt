export const HOTEL_DATA = {
  name: "Pensjonat Grań",
  tagline: "Twój wypoczynek w sercu Karpacza tuż przy stoku narciarskim",
  address: "ul. Kolorowa 3, 58-540 Karpacz",
  locationName: "Centrum • Stok Kolorowa (9.3/10)",
  phone: "+48 601 584 872",
  email: "rezerwacje@gran.karpacz.pl",
  bookingScore: 8.8,
  bookingReviewsCount: 714,
  stats: [
    { label: "Lokalizacja na Booking", value: "9.3 / 10", desc: "Samo centrum Karpacza" },
    { label: "Do stoku Kolorowa", value: "100 m", desc: "Wyciągi i tor Pohulanka" },
    { label: "Do stoku Kolorowa", value: "100 m", desc: "Wyciągi i tor Pohulanka" },
    { label: "Śniadania i obiadokolacje", value: "Bufet", desc: "Szwedzki stół w cenie" }
  ],
  benefits: [
    {
      title: "Tuż przy stoku narciarskim (100m)",
      description: "Pensjonat usytuowany w centrum przy samym wyciągu narciarskim Kolorowa i letnim torze saneczkowym Pohulanka.",
      icon: "Mountain"
    },
    {
      title: "Centrum Karpacza (Lokalizacja 9.3/10)",
      description: "Wszędzie blisko pieszo – szlaki turystyczne, restauracje, kawiarnie i główne atrakcje Karpacza na wyciągnięcie ręki.",
      icon: "Home"
    },
    {
      title: "Stok Kolorowa i Tor Pohulanka",
      description: "Zaledwie 100 metrów do stoku narciarskiego oraz całorocznego toru saneczkowego.",
      icon: "Sun"
    },
    {
      title: "Szwedzki bufet i obiadokolacje",
      description: "Codzienne przepyszne śniadania w formie bufetu oraz ciepłe domowe obiadokolacje serwowane na miejscu.",
      icon: "Coffee"
    },
    {
      title: "Pokoje z widokiem na góry i tarasem",
      description: "Większość naszych pokoi posiada bezpośrednie wyjście na słoneczny taras z widokiem na Karkonosze.",
      icon: "Sun"
    },
    {
      title: "Szybkie Wi-Fi & Smart TV",
      description: "Darmowy bezprzewodowy internet we wszystkich pokojach oraz telewizja satelitarna.",
      icon: "Wifi"
    }
  ],
  rooms: [
    {
      id: "dwuosobowy",
      name: "Pokój Dwuosobowy z Tarasem",
      capacity: "2 osoby",
      size: "18 m²",
      price: "160",
      description: "Przytulny pokój dla par z wyjściem na słoneczny taras widokowy, prywatną łazienką i zestawem do kawy.",
      image: "./images/room_double.jpg",
      amenities: [
        "Prywatna łazienka z prysznicem",
        "Wyjście na taras widokowy",
        "Szybkie Wi-Fi & TV-SAT",
        "Czajnik elektryczny",
        "100m do stoku narciarskiego",
        "Śniadanie w formie bufetu"
      ]
    },
    {
      id: "trzyosobowy",
      name: "Pokój Trzyosobowy Comfort",
      capacity: "3 osoby",
      size: "25 m²",
      price: "220",
      description: "Komfortowy pokój dla 3 osób ze strefą wypoczynkową i wspaniałym widokiem na centrum i szczyty.",
      image: "./images/room_comfort.jpg",
      amenities: [
        "Prywatna łazienka z prysznicem",
        "1 łóżko podwójne + 1 pojedyncze",
        "Szybkie Wi-Fi & TV-SAT",
        "Stolik kawowy z fotelami",
        "Czajnik i zestaw herbat",
        "Śniadanie w formie bufetu"
      ]
    },
    {
      id: "studio",
      name: "Studio Rodzinne (4 osoby)",
      capacity: "4 osoby",
      size: "35 m²",
      price: "300",
      description: "Przestronne studio dla rodzin z dziećmi – wygoda wypoczynku po całym dniu na stoku Kolorowa.",
      image: "./images/room_studio.jpg",
      amenities: [
        "2 oddzielne pomieszczenia",
        "Prywatna łazienka rodzinna",
        "Szybkie Wi-Fi & 2x TV-SAT",
        "Bezpośredni widok na góry",
        "Wyjście na słoneczny taras",
        "Śniadanie w formie bufetu"
      ]
    }
  ],
  gallery: [
    {
      id: 1,
      url: "./images/hero_mountain.jpg",
      caption: "Pensjonat Grań - Dwupiętrowy budynek w sercu Karpacza przy stoku",
      category: "Otoczenie"
    },
    {
      id: 2,
      url: "./images/room_double.jpg",
      caption: "Pokój Dwuosobowy z tarasem i widokiem na góry",
      category: "Pokoje"
    },
    {
      id: 3,
      url: "./images/dining_fireplace.jpg",
      caption: "Jadalnia, w której serwujemy szwedzki bufet śniadaniowy",
      category: "Jadalnia"
    },
    {
      id: 4,
      url: "./images/room_comfort.jpg",
      caption: "Przestronne wnętrze pokoju 3-osobowego",
      category: "Pokoje"
    },
    {
      id: 5,
      url: "./images/garden_view.jpg",
      caption: "Taras widokowy i zielone otoczenie przy stoku Kolorowa",
      category: "Otoczenie"
    },
    {
      id: 6,
      url: "./images/room_studio.jpg",
      caption: "Studio rodzinne dla narciarzy i turystów",
      category: "Pokoje"
    },
    {
      id: 7,
      url: "./images/hero_mountain.jpg",
      caption: "Widok na góry i centrum Karpacza",
      category: "Otoczenie"
    },
    {
      id: 8,
      url: "./images/garden_view.jpg",
      caption: "Strefa wypoczynku na świeżym powietrzu",
      category: "Otoczenie"
    }
  ],
  attractions: [
    {
      name: "Stok Narciarski i Tor Kolorowa / Pohulanka",
      distance: "100 m",
      time: "1 minuta spacerem",
      desc: "Wyciągi narciarskie oraz całoroczny tor saneczkowy znajdują się tuż pod samym pensjonatem!",
      image: "./images/hero_mountain.jpg"
    },
    {
      name: "Centrum Karpacza i Deptak",
      distance: "200 m",
      time: "2 minuty spacerem",
      desc: "Główne restauracje, sklepy, kawiarnie i szlaki turystyczne w odległości kilkudziesięciu metrów.",
      image: "./images/garden_view.jpg"
    },
    {
      name: "Kościół Wang",
      distance: "3.2 km",
      time: "7 min autem",
      desc: "Słynna zabytkowa norweska świątynia z XII wieku – symbol Karpacza.",
      image: "./images/hero_mountain.jpg"
    },
    {
      name: "Krucze Skały",
      distance: "1.2 km",
      time: "12 min spacerem",
      desc: "Malownicze formacje skalne nad potokiem Płomnica. Doskonałe miejsce na spacer.",
      image: "./images/garden_view.jpg"
    }
  ],
  reviews: [
    {
      author: "Beata, Polska",
      source: "Booking.com",
      rating: "10 / 10",
      date: "Wspaniały pobyt",
      text: "Sam pensjonat jest w świetnej lokalizacji, czyste pokoje i bardzo dobre jedzenie. Wszędzie blisko na szlaki i na stok!"
    },
    {
      author: "Joanna, Polska",
      source: "Booking.com",
      rating: "9.5 / 10",
      date: "Znakomita lokalizacja",
      text: "Pensjonat położony w znakomitej lokalizacji. Blisko centrum i przystanków, a jednocześnie w cichej okolicy. Wygodne łóżka, wspaniałe śniadania z pyszną kawą!"
    },
    {
      author: "Tomek, Polska",
      source: "Booking.com",
      rating: "9.6 / 10",
      date: "Idealny na narty",
      text: "Lokalizacja 10/10 tuż obok stoku Kolorowa, bardzo dobre śniadania w formie bufetu, czysto i ciepło w pokoju. Polecam!"
    }
  ],
  policies: {
    checkIn: "od 14:00 do 21:00",
    checkOut: "do 11:00",
    pets: "Wszystkie pokoje wyposażone w łazienkę i bezprzewodowy internet.",
    parking: "Bezpłatne miejsca na ul. Kolorowej LUB prywatny zamykany parking w odległości 20 m (15 zł/dobę).",
    breakfast: "Śniadania w formie szwedzkiego bufetu oraz obiadokolacje w cenie pobytu."
  }
};
