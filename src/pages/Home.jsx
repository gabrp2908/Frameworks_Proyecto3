import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import StatsSection from '../components/Home/StatsSection';
import CoursesSection from '../components/Home/CoursesSection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <CoursesSection />
    </div>
  );
};

export default Home;