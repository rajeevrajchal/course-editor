import React from 'react';
import TrendingCard from "components/TwoTrendingPreviewCardsWithImage";

const trending = [
    {
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
        courseType: "Programming",
        price: "$99",
        name: "javascript",
        type: "Trending",
        duration: "7 Days Return",
    },
    {
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM71Xuf6em9-uVNnhaGrC8ewnUdf07H_sgBFKM_0rCqhyOnW3zk8-Mxn1zDvNjoH_a_OA&usqp=CAU",
        courseType: "Programming",
        price: "$169",
        name: "Java",
        type: "Trending",
        duration: "7 Days Return",
    }
];
const TrendingCourse = () => {
    return (
        <TrendingCard trendingCourse={trending}/>
    );
};

export default TrendingCourse;
