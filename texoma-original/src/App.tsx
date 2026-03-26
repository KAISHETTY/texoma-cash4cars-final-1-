import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import HowItWorks from './components/HowItWorks';
import SubmissionForm from './components/SubmissionForm';
import RecentBuys from './components/RecentBuys';
import Testimonials from './components/Testimonials';
import VehicleTypes from './components/VehicleTypes';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setIsAdmin(window.location.hash === '#admin');
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-[#FDF2F2] text-[#4B5563] font-body selection:bg-[#EF4444] selection:text-white">
      <Banner />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <SubmissionForm />
      <RecentBuys />
      <Testimonials />
      <VehicleTypes />
      <FAQ />
      <MapSection />
      <FinalCTA />
      <Footer />
      <FloatingElements />
    </div>
  );
}
