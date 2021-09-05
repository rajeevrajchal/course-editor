import React from 'react';
import tw from "twin.macro";
import ReactAceCodeEditor from "../plugins/ReactAceCodeEditor";

const Container = tw.div`relative`;
const ThreeColumn = tw.div`flex flex-col lg:flex-row lg:items-center h-full h-screen`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left h-full h-screen bg-black text-white`;
const MiddleColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left h-full h-screen `;
const RightColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left h-full h-screen `;

const EditorPage = () => {
    return (
        <Container>
            <ThreeColumn>
                <LeftColumn>
                    <h3 className='my-4 mx-8 font-bold text-2xl'>Instruction</h3>
                    <div className="instruction font-medium p-8">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, aperiam aspernatur
                            beatae cum fugit mollitia perferendis porro rem rerum sint totam voluptate? Eos quam quisquam
                            sunt? Commodi deleniti, maiores.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, aperiam aspernatur
                            beatae cum fugit mollitia perferendis porro rem rerum sint totam voluptate? Eos quam quisquam
                            sunt? Commodi deleniti, maiores.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi, aperiam aspernatur
                            beatae cum fugit mollitia perferendis porro rem rerum sint totam voluptate? Eos quam quisquam
                            sunt? Commodi deleniti, maiores.</p>
                    </div>
                </LeftColumn>
                <MiddleColumn>
                    <ReactAceCodeEditor/>
                </MiddleColumn>
                <RightColumn className='p-2 bg-gray-100'>
                    <p>the output</p>
                </RightColumn>
            </ThreeColumn>
        </Container>
    );
};

export default EditorPage;
