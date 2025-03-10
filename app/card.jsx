import React, { useState } from "react";
import { styled } from "styled-components"
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";



const StyledCard = styled.div`
    width: 255px;
    height: 315px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    margin: 0;
    border-radius: 1.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
    }
    img{
        width: 100%;
        height: auto;
        object-fit: cover;  
        margin-bottom: 10px;
        border-radius: 0.5rem;
    }
    .infoProduct{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
    h3, p{
        margin: 0;
    }
    p{
        font-size: 0.8rem;
        color: #797676;
    }
    .clubPrice{
        color: orange;
    }

    .sizes{
        margin-top: 10px;
    }
    label{
        font-size: 0.8rem;
        margin-right: 5px;
        margin: 5px;
    }

    .action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;
        gap: 10px;
    }
    button{
        height: 80%;
        padding: 8px 15px;
        border: 1px solid gray;
        border-radius: 5px;
        border-style: 2px solid;
        background-color: white;
        color: black;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
            background-color: black;
            color: white;
            border-color: black;
        }
        &:active {
            transform: scale(0.95);
        }
    }
    .heart-icon {
    stroke: gray; /* Color del borde cuando NO está activo */
    stroke-width: 1px; /* Grosor del borde más delgado */
    fill: none; /* Interior transparente */
    transition: stroke 0.3s ease-in-out, fill 0.3s ease-in-out;
}

.heart.liked .heart-icon {
    stroke: red; /* Color del borde cuando está activo */
    stroke-width: 1.5px; /* Puedes ajustarlo si lo quieres más grueso al activarse */
    fill: red; /* Color del interior al activarse */
}
    `;

export const Card = ({ image, altText, title, subtitle, price, clubPrice, sizes = [], genders = [] }) => {
    const [isLiked, setIsLiked] = useState(false); // Estado para el favorito
    const [selectedSize, setSelectedSize] = useState(""); // Estado para la talla seleccionada
    const [selectedGender, setSelectedGender] = useState(""); // Estado para la genero seleccionada

    const clickHandler = (e) => {
        setIsLiked(!isLiked);
    };

    return (
        <StyledCard>
            <img src={image} alt={altText} />
            <div className="infoProduct">
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <p>${price}</p>
                <p className="clubPrice">Club price: ${clubPrice}</p>
            </div>


            {/* Lista desplegable de tallas */}
            <div className="sizes">
                <label htmlFor="size-select">Talla:</label>
                <select
                    id="size-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                >
                    <option value="">--</option>
                    {sizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <label htmlFor="gender-select">Sexo:</label>
                <select
                    id="gender-select"
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                >
                    <option value="">--</option>
                    {genders.map((gender) => (
                        <option key={gender} value={gender}>
                            {gender}
                        </option>
                    ))}
                </select>
            </div>

            <div className="action">
                <article onClick={clickHandler} className={isLiked ? "heart liked" : "heart"}>
                    <Heart size={24} className="heart-icon" />
                </article>
                <button>
                    Comprar
                </button>
                <button>
                    <ShoppingCart />
                </button>

            </div>
        </StyledCard>
    )
}