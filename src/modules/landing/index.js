import React from 'react';
import Features from "../../components/ThreeColSimple.jsx";
import MainFeature from "../../components/TwoColSingleFeatureWithStats.jsx";
import Blog from "../../components/PopularAndRecentBlogPosts.jsx";
import Testimonial from "../../components/TwoColumnWithImageAndProfilePictureReview.jsx";
import FAQ from "../../components/SimpleWithSideImage.jsx";
import LandingLayout from "layouts/LandingLayout";
import PopularCourse from "./components/PopularCourse";
import TrendingCourse from "./components/TrendingCourse";

const Landing = () => {
    return (
        <LandingLayout>
            <>
                <Features/>
                <PopularCourse/>
                <TrendingCourse/>
                <MainFeature/>
                <Blog/>
                <Testimonial textOnLeft={true}/>
                <FAQ/>
            </>
        </LandingLayout>
    );
};

export default Landing;
