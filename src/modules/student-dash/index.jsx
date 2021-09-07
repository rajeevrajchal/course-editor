import React from 'react';
import StudentLayout from "../../layouts/StudentLayout";
import tw from "twin.macro";
import ContinueCourse from "./components/ContinueCourse";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10`;
const StudentDashboard = () => {
    return (
        <StudentLayout>
            <Container>
                <Content>
                    <ContinueCourse/>
                </Content>
            </Container>
        </StudentLayout>
    );
};

export default StudentDashboard;
