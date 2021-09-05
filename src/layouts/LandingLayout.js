import React from 'react';
import AnimationRevealPage from "plugins/AnimationRevealPage";
import HeroSection from "modules/landing/components/HeroSection";
import LandingFooter from "modules/landing/components/LandingFooter";
import GetStarted from "components/GetStarted";


const LandingLayout = ({children}) => {
    return (
        <AnimationRevealPage>
            <HeroSection/>
            {
                children
            }
            <GetStarted/>
            <LandingFooter/>
        </AnimationRevealPage>
    );
};

export default LandingLayout;
