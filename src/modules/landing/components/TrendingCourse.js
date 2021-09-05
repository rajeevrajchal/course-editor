import React from 'react';
import TrendingCard from "components/TwoTrendingPreviewCardsWithImage";

const trending = [
    {
        imageSrc:
            "https://images.unsplash.com/photo-1553194587-b010d08c6c56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
        type: "Programming",
        pricePerDay: "$99",
        title: "javascript",
        trendingText: "Trending",
        durationText: "7 Days Return",
    },
    {
        imageSrc:
            "https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
        type: "Programming",
        pricePerDay: "$169",
        title: "React Js",
        trendingText: "Trending",
        durationText: "7 Days Return",
    }
];
const TrendingCourse = () => {
    return (
        <TrendingCard trendingCourse={trending}/>
    );
};

export default TrendingCourse;
