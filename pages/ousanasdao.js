import React from "react"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainLayout from '../src/components/Layout'
import BannerSection from '../src/containers/BannerSection'
import AboutSection from '../src/containers/AboutSection'
import WorkSection from '../src/containers/WorkSection'
import RoadMapSection from '../src/containers/RoadMapSection'
import VideoSection from '../src/containers/VideoSection'
import FeatureSection from '../src/containers/FeatureSection'
import TeamSection from '../src/containers/TeamSection'
import PriceSection from '../src/containers/PriceSection'
import SafeSection from '../src/containers/SafeSection'
import BlogSection from '../src/containers/BlogSection'
import ContactSection from '../src/containers/ContactSection'
import FooterSection from '../src/containers/FooterSection'
import DaoLayout from "../src/components/DaoLayout";
import DaoBanner from "../src/containers/DaoBanner";
import StructureSection from "../src/containers/StructureSection";
import CharterSection from "../src/containers/FunFactSection copy";
// Initialize Firebase
function index() {
  return (
   <DaoLayout>
     <DaoBanner />
     <AboutSection />
     <StructureSection />
     <CharterSection />
     <RoadMapSection /> 
     {/* <VideoSection /> */}
     {/* <FeatureSection /> */}
     {/* <TeamSection /> */}
     {/* <PriceSection /> */}
     {/* <FunFactSection />
     <SafeSection /> */}
     {/* <ContactSection /> */}
     <FooterSection />
   </DaoLayout>
  );
}

index.getInitialProps = () => {
  return {};
};

export default index;