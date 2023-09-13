import Header from "../components/header";
import Hero from "../components/hero";
import AreasContainer from "../components/areas-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesContainer2 from "../components/rent-properties-container2";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { useState } from "react";

// Full Version
const LandingPage = () => {
  const [sideBar, setSideBar] = useState(false)

  function handleHamburgerClick() {
    let side = sideBar;
    setSideBar(!side);
  }
 

  return (
    <div className="relative bg-gray-white h-[5095.99px] flex flex-col">
      <Header handleHamburgerClick={handleHamburgerClick} hamburger={false}/>
      <div className="flex flex-row">
        <div id="mainpage" className="flex flex-col items-center justify-start">
          <Hero />
          <AreasContainer />
          <FeatureContainer />
          <RentPropertiesContainer />
          <RentPropertiesContainer2 />
          <Contact />
          <Footer
            imageIds="/houseline2.svg"
            smallImageIds="/social-media-logo5.svg"
            mediumImageIds="/social-media-logo6.svg"
            smallImageIds2="/social-media-logo7.svg"
            smallImageIds3="/social-media-logo8.svg"
            largeImageIds="/social-media-logo9.svg"
            propOverflow="unset"
          />
        </div>

        {sideBar && <div className="w-[300px] ">
            <p>Hi!!</p>
        </div>}

      </div>
    </div>
  );
};

export default LandingPage;
