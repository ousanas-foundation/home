import React from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainLayout from '../../src/components/Layout'
import BannerSection from '../../src/containers/BannerSection'
import AboutSection from '../../src/containers/AboutSection'
import WorkSection from '../../src/containers/WorkSection'
import RoadMapSection from '../../src/containers/RoadMapSection'
import VideoSection from '../../src/containers/VideoSection'
import FeatureSection from '../../src/containers/FeatureSection'
import TeamSection from '../../src/containers/TeamSection'
import PriceSection from '../../src/containers/PriceSection'
import FunFactSection from '../../src/containers/FunFactSection'
import SafeSection from '../../src/containers/SafeSection'
import BlogSection from '../../src/containers/BlogSection'
import ContactSection from '../../src/containers/ContactSection'
import FooterSection from '../../src/containers/FooterSection'
import ManifestoBanner from "../../src/containers/ManifestoBanner";
// Initialize Firebase
function Manifesto() {
  return (
   <MainLayout>
     <ManifestoBanner /> 
     <VideoSection /> 
     <FeatureSection />
     <TeamSection />
     <PriceSection />
     <FunFactSection />
     <SafeSection />
     <ContactSection />
     <FooterSection />
   </MainLayout>
  );
}

Manifesto.getInitialProps = () => {
  return {};
};

export default Manifesto;