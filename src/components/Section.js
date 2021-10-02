import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom >
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description}</p>
                </ItemText>
            </Fade>
            <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText && 
                <RightButton>
                    {rightBtnText}
                </RightButton> }
            </ButtonGroup>
            </Fade>
            <DownArrow  src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/Images/model-s.jpg') ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction:column;
    justify-content: space-between;  // Vertical alignment
    align-items: center; // horizontal
    background-image: ${props => `url("/Images/${props.bgImage}")`};

    @media (max-width:680px){
        width:100%;
        height:100vh;
        margin:0;


    }
    
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom:30px;

    @media (max-width:768px){
        flex-direction:column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: #fff;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor: pointer;
    margin:8px;
`
const RightButton = styled(LeftButton)`
    background-color: #fff;
    opacity:0.65;
    color: black;
`
const DownArrow = styled.img `
    
    height: 40px;
    animation:animateDown infinite 1.5s;
    overflow-x: hidden;
    `
const Buttons = styled.div`
    
`

export default Section;