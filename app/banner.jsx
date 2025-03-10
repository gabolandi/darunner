import React from "react";
import { styled } from "styled-components"

const StyledBanner = styled.div`
    .banner{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
    img {
        width: 50%;
    }
`

export const Banner = () => {
    return (
        <StyledBanner>
            <div className="banner">
                <img src="/affi2.webp" alt="banner_darunner" />
            </div>

        </StyledBanner>
    )
}