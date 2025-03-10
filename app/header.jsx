import React from "react";
import { styled } from "styled-components"

const StyledHeader = styled.header`
    background-color: #c2c2bf;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul.menu {
        display: flex;
        list-style: none;
        padding: 0;
    }
    ul.menu li {

        padding: 5px 10px;
        margin-right: 10px;
    }
    ul.menu li a {
        color: #fff;
        text-decoration: none;
    }

    ul.menu li:hover {
        background-color: #fff;
        a{
            color: black;
        }
    }
  
        ul.menu li a:active {
        color: black;
    }

    img {
        width: 20vw;
    }
`;

export const Header = () => {
    return (
        <StyledHeader>
            <img src="/logo.png" alt="logo_darunner" />
            <div>
                <ul className="menu">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">contacto</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Carrito</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </div>
        </StyledHeader>
    )
}