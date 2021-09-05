import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.jsx";
import {PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.jsx";
import EmailIllustrationSrc from "images/email-illustration.svg";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {postLoginUser} from "../service/authAction";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left `;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Form = tw.form`mt-8 md:mt-10 text-sm`
const FormColumn = tw.div`flex flex-col w-auto`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm flex items-center `;
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500 w-full`
const InputContainer = tw.div`relative py-5 mt-6`;
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-6`

const LoginForm = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const handleLogIn = (data) => {
        console.log('this will handle login', data)
        dispatch(postLoginUser(data))
    }
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc}/>
                </ImageColumn>
                <TextColumn textOnLeft=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ut?'>
                    <TextContent>
                        <Heading>Welcome to CodeCourse</Heading>
                        <Subheading>Sign Up </Subheading>
                        <Form onSubmit={handleSubmit(handleLogIn)}>
                            <FormColumn>
                                <InputContainer tw="flex-1">
                                    <Label htmlFor="email-input"> Email <span>*</span></Label>
                                    <Input {...register("email", {required: true})} id="email-input"
                                           placeholder="Enter Your Email"/>
                                    {
                                        ( errors && errors.email) && <div className='text-red-800'>Email is required</div>
                                    }
                                </InputContainer>
                            </FormColumn>
                            <FormColumn>
                                <InputContainer tw="flex-1">
                                    <Label htmlFor="password-input"> Password <span>*</span> </Label>
                                    <Input {...register("password", {required: true})} id="password-input"
                                           placeholder="Enter Your Password"
                                           type='password'/>
                                    {
                                        ( errors && errors.password) && <div className='text-red-800'>Email is required</div>
                                    }
                                </InputContainer>
                            </FormColumn>
                            <SubmitButton type="submit">Sign In</SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};

export default LoginForm
