import React from 'react';
import './styles.css';
import FeatureSection from './FeatureSection';
import Benefits from './Benefits';
import WhyChooseUs from './WhyChooseUs';
import Footer from './Footer';
import CarouselComponent from './CarouselComponent';
function HomePage() {
  return (
    <main className="home-page">
      {/* <h2>Welcome to our Logistics Management System</h2>
      <p>
        Our system helps you manage all your logistics needs efficiently and effectively. 
        Browse through our services and products to learn more.
      </p> */}
      <div>
        <CarouselComponent/>
        <FeatureSection/>
        <Benefits/>
        <WhyChooseUs/>
        <Footer/>
    
      </div>
    </main>
    
  );
}

export default HomePage;
