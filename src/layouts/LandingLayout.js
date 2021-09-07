import React from 'react';
import AnimationRevealPage from "plugins/AnimationRevealPage";
import GetStarted from "components/GetStarted";
import HeroSection from "../modules/landing/components/HeroSection";
import LandingFooter from "../modules/landing/components/LandingFooter";


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
