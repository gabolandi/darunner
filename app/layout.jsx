import React, { useEffect, useState } from "react";
import { styled } from "styled-components"
import { Header } from "./header";
import { Banner } from "./banner";
import { Card } from "./card";
import { Footer } from "./footer";
import { products } from "./products";

const Styledlayout = styled.section`
    .recommended{
        width: 80%;
        background-color: #c2c2bf;
        margin-top:15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        width: 100%;
        flex-wrap: wrap;
    }
    .viewAll{
        color: #000;
        text-decoration: underline;
        margin-bottom: 10px;
        transition: 0.3s;
        &:hover {
            color: red;
        }
    }
    .recommended-cards{
        width: 80%;
        display: flex;
        justify-content: center;
        margin: 15px;
        gap: 12px;
        width: 100%;
        flex-wrap: wrap;
    }`

export const Layout = () => {
    return (
        <Styledlayout>
            <Header />
            <Banner />
            <div className="recommended">
                <h2>Recomendados</h2>
                <div className="recommended-cards">
                    {products.map((product) => (
                        <Card
                            image={product.image}
                            altText={product.altText}
                            title={product.title}
                            subtitle={product.subtitle}
                            price={product.price}
                            clubPrice={product.clubPrice}
                            sizes={product.sizes}
                            genders={product.genders}
                        />
                    ))};
                </div>
                <a className="viewAll" href="">ver todos</a>

            </div>
            <div className="footer">
                <Footer
                    image="logo.png"
                    altText="logo darunner"
                />
            </div>

        </Styledlayout>
    )
}