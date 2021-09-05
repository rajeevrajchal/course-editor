import React from 'react';
import LandingFooter from "modules/landing/components/LandingFooter";
import AnimationRevealPage from "plugins/AnimationRevealPage";
import Header from "components/headers/light";
import navLinks from "routes/navitems";

const AppLayout = (props) => {
    const {children} = props
    return (
        <>
            <AnimationRevealPage>
                <Header roundedHeaderButton navLinks={navLinks}/>
                <div className='my-4'>
                    {
                        children
                    }
                </div>
                <LandingFooter/>
            </AnimationRevealPage>
        </>
    );
};

export default AppLayout;
