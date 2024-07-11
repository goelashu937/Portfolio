import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';
import ContactContent from '../components/ContactContent';
export default function Contact() {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Contact." text="Let's Connect Everyone"/>
      <ContactContent />
      <Footer />
    </div>
  )
}
