import React from 'react';
import tw from "twin.macro";
import {TitleHeading} from "../../../components/misc/Headings";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {PrimaryButton as PrimaryButtonBase} from "../../../components/misc/Buttons";
import {courseJson} from "../../../mock-data/course";


const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(TitleHeading)``;

const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;
const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded-md py-1 mt-2`;


const ContinueCourse = () => {
    const history = useHistory()
    return (
        <>
            <HeadingWithControl>
                <Heading>Continue Course</Heading>
            </HeadingWithControl>
            <ThreeColumn>
                {courseJson.map((course) => (
                    <Column key={course.id}>
                        <Card>
                            <Image imageSrc={course.image}/>
                            <Details>
                                <Title>{course.name}</Title>
                                <Description>{course.description}</Description>
                                <PrimaryButton onClick={() => history.push('/codeEditor')}>Continue...</PrimaryButton>
                            </Details>
                        </Card>
                    </Column>
                ))}
            </ThreeColumn>

        </>
    );
};

export default ContinueCourse;
