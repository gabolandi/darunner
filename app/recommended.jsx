import React from "react";
import { styled } from "styled-components"
import { Card } from "./card";

const StyledSection = styled.div`
    .recommended{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        border-radius: 10px;
        background-color: #c2c2bf;
        color: #fff;
        padding: 10px;
    }
`

export const Recommended = () => {
    return (
        <StyledSection>
            <div className="recommended">
                {/* <Card /> */}
            </div>

        </StyledSection>
    )
}