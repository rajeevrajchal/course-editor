import React from 'react';
import tw from "twin.macro";
import LoginForm from "../components/LoginForm";
import AppLayout from "../../../layouts/AppLayout";

const Container = tw.div` 
  max-w-screen-xl mx-auto
`;
const Login = () => {
    return (
        <AppLayout>
            <Container>
                <LoginForm/>
            </Container>
        </AppLayout>
    );
};

export default Login;
