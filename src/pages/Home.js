import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import RecentPost from "../components/RecentPost";
import SecondBanner from "../components/SecondBanner";
import GetInvolved from "../components/GetInvolved";
import FeatureProgram from "../components/FeatureProgram";
import SupportCount from "../components/SupportCount";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RecentPost />
      <SecondBanner />
      <GetInvolved />
      <FeatureProgram />
      <SupportCount />
      <Testimonials />
      <Contact />
      <Footer home />
    </div>
  );
};

export default Home;
