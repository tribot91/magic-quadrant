import styled from "styled-components";

export const Coord = styled.div<{ x: number; y: number; isFocussed: boolean }>`
    position: absolute;
    left: ${(props) => props.x}%;
    bottom: ${(props) => props.y}%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, 50%);
    background: ${(props) => (props.isFocussed ? "darkred" : "#3878a2")};
    border-radius: 50%;

    &:hover {
        filter: brightness(1.5);
        cursor: grab;
    }

    &:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }
`;

export const Label = styled.div<{ x: number; y: number }>`
    position: relative;
    top: ${(props) => (props.y >= 20 ? "100%" : "auto")};
    bottom: ${(props) => (props.y < 20 ? "100%" : "auto")};
    left: ${(props) => (props.x <= 80 ? "100%" : "auto")};
    right: ${(props) => (props.x > 80 ? "100%" : "auto")};
    font-size: 13px;
    color: #3878a2;
    font-family: sans-serif;
    width: 40px;
    pointer-events: none;
`;