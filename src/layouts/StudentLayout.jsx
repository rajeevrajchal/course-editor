import React from 'react';
import AnimationRevealPage from "../plugins/AnimationRevealPage";
import Header from "../components/headers/light";

const StudentLayout = (props) => {
    const {children} = props
    return (
        <AnimationRevealPage>
            <Header/>
            {
                children
            }
        </AnimationRevealPage>
    );
};

export default StudentLayout;
