import React from "react";
import Header from "./../components/Header";
import HairProducts from "./../components/homeComponents/HairProducts";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import HairBanner from "./../components/homeComponents/HairBanner";

const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <HairBanner />
      <HairProducts keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
