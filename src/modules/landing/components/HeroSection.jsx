import React from 'react';
import Hero from "components/hero/TwoColumnWithInput";
import navLinks from "routes/navitems";

const HeroSection = () => {
    return (
        <Hero roundedHeaderButton={true} navLinks={navLinks}/>
    );
};

export default HeroSection;
