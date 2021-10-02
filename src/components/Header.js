import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
import { useSelector } from 'react-redux';
import  {selectCars } from '../app/carSlice';




function Header() {

    const [burgerStatus, setburgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars)
    return (
        <Container>
            <a>
                <img src="/Images/logo.svg"></img>
            </a>
            <Menu>
                {cars && cars.map((car, index) =>
                    <a key={index} href="#">{car}</a>
                )}
               
                {/* <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a> */}
            </Menu>

            <RightMenu>
                <a href="#">SHOP</a>          
                <a href="#">TESLA ACCOUNT</a>    
                
            </RightMenu>
            <CustomMenu onClick={() => setburgerStatus(true)}> 
                <img src="/Images/menu.svg" ></img>
            </CustomMenu>

            <BurgerNav show={ burgerStatus}>
                <CloseWrapper onClick={() => setburgerStatus(false)}>
                <img src="/Images/x-btn.svg" ></img>
                </CloseWrapper>
                {cars && cars.map((car, index) =>
                    <li key={index} href="#">{car}</li>
                )}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Energy</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Support</a></li>
            </BurgerNav>

            
        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
display: flex;
align-items:center;
justify-content: space-between;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex: 1;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap; 
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-content: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
@media (max-width: 768px) {
    font-weight:400;
    margin-right:0px;
}
`

const CustomMenu = styled.div`
    cursor: pointer;
    margin-top:3px;

`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#fff;
    width:300px;
    z-index:16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align:start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)' };
    transition: transform 0.4s ;
    cursor:pointer;
    font-weight: 600;

    img {
        height:20px;
        cursor:pointer;
    }
    li  {
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);

        a {
            font-weight: 600;
        }
        
    }
    `
const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
`