import React from "react";
import Header from "./../components/Header";
import BodyBathProducts from "./../components/homeComponents/BodyBathProducts";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import BodyBathBanner from "./../components/homeComponents/BodyBathBanner";

const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <BodyBathBanner />
      <BodyBathProducts keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
