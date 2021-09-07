import React, {useEffect} from 'react';
import SliderCard from "components/ThreeColSlider.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../../../redux/actions";

const PopularCourse = () => {
    const dispatch = useDispatch()
    const courses = useSelector(state => state.courseReducer.courses)

    console.log('the courses are', {courses})
    useEffect(() => {
        if (courses.length === 0) {
            dispatch(getCourses())
        }
        // eslint-disable-next-line
    }, [])
    return (
        <SliderCard popularCourse={courses || []}/>
    );
};

export default PopularCourse;
