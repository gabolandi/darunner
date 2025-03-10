import React from "react";
import { styled } from "styled-components"


const Styledfooter = styled.footer`
    color: #646161;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .emailMarketing{
        width: 30%;
    }
    .info{
        width: 30%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        
    }
    ul {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        list-style: none;
        padding: 0;
    }
    ul li a {
        color: #646161;
        text-decoration: none;
    }

    ul li:hover {
        background-color: #fff;
        a{
            color: black;
        }
    }
  
        ul li a:active {
        color: black;
    }
    img{
        width: 30%;
        height: auto;
        object-fit: cover;  
        margin-bottom: 10px;
        border-radius: 0.5rem;
        margin-top: 20px;
    }
    `;
export const Footer = ({ image, altText, }) => {
    return (
        <Styledfooter>
            <div className="emailMarketing">
                <h2>!Sigamos en contacto!</h2>
                <p>Registar tu email y recibe un descuento de $20.000</p>
                <form>
                    <input type="email" placeholder="Email" />
                    <button type="submit">Suscribirme</button>
                </form>
            </div>
            <div className="info">
                <img src={image} alt={altText} />
                <ul>
                    <li><a href="">Sobre nosotros</a></li>
                    <li><a href="">Unete al club</a></li>
                    <li><a href="">Participaciones</a></li>
                </ul>
            </div>
            <div className="help">
                <h2>Ayuda y más</h2>
                <ul>
                    <li><a href="">Contáctanos</a></li>
                    <li><a href="">Ubicación</a></li>
                    <li><a href="">Políticas</a></li>
                </ul>
            </div>
        </Styledfooter>
    )
}