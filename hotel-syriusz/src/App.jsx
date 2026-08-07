import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Attractions from './components/Attractions';
import ReviewsSection from './components/ReviewsSection';
import ContactMap from './components/ContactMap';
import FooterModal from './components/FooterModal';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalData, setBookingModalData] = useState(null);

  const handleOpenBooking = (data) => {
    setBookingModalData(data || {});
  };

  const handleCloseBooking = () => {
    setBookingModalData(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Rooms onOpenBooking={handleOpenBooking} />
        <Gallery />
        <Attractions />
        <ReviewsSection />
        <ContactMap />
      </main>

      {/* Footer & Compliance Modals */}
      <FooterModal />

      {/* Booking Modal */}
      {bookingModalData !== null && (
        <BookingModal 
          initialData={bookingModalData} 
          onClose={handleCloseBooking} 
        />
      )}
    </div>
  );
}
