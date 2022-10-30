import React from "react";
import Header from "./../components/Header";
import PopularProducts from "./../components/homeComponents/PopularProducts";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Banner from "./../components/homeComponents/Banner";
import Categories from "../components/homeComponents/Categories";

const HomeScreen = ({match}) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <div className="logo-banner"><span className="heading">Popular Products</span></div>
      <PopularProducts keyword={keyword} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
