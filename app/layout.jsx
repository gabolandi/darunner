import React from "react";
import { styled } from "styled-components"
import { Header } from "./header";
import { Banner } from "./banner";
import { Card } from "./card";
import { Footer } from "./footer";

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
                    <Card
                        image="Vaporfly_3/aqua.png"
                        altText="Vaporfly 3 Aqua"
                        title="Nike Vaporfly 3"
                        subtitle="Zapatos para correr"
                        price={1430000}
                        clubPrice={1300000}
                        sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15]}
                        genders={["Hombre", "Mujer"]}
                    />
                    <Card
                        image="Vaporfly_3/kipchoge.png"
                        altText="Vaporfly 3 Aqua"
                        title="Nike Vaporfly 3"
                        subtitle="Zapatos para correr"
                        price={1430000}
                        clubPrice={1300000}
                        sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15]}
                        genders={["Hombre", "Mujer"]}
                    />
                    <Card
                        image="Vaporfly_3/hyper-pink.png"
                        altText="Vaporfly 3 Aqua"
                        title="Nike Vaporfly 3"
                        subtitle="Zapatos para correr"
                        price={1430000}
                        clubPrice={1300000}
                        sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15]}
                        genders={["Hombre", "Mujer"]}
                    />
                    <Card
                        image="Vaporfly_3/gold-black.png"
                        altText="Vaporfly 3 Aqua"
                        title="Nike Vaporfly 3"
                        subtitle="Zapatos para correr"
                        price={1430000}
                        clubPrice={1300000}
                        sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15]}
                        genders={["Hombre", "Mujer"]}
                    />
                    <Card
                        image="Vaporfly_3/orange.png"
                        altText="Vaporfly 3 Aqua"
                        title="Nike Vaporfly 3"
                        subtitle="Zapatos para correr"
                        price={1430000}
                        clubPrice={1300000}
                        sizes={[7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15]}
                        genders={["Hombre", "Mujer"]}
                    />
                </div>
                <a className="viewAll" href="product.jsx">ver todos</a>

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