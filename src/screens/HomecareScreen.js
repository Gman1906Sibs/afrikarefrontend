import React from "react";
import Header from "./../components/Header";
import HomecareProducts from "./../components/homeComponents/HomecareProducts";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import HomecareBanner from "./../components/homeComponents/HomecareBanner";

const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <HomecareBanner />
      <HomecareProducts keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
