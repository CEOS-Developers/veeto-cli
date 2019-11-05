import styled, { css } from 'styled-components';

export default styled.hr`
    ${props => css` 
        margin-block-start:0rem;
        margin-block-end:0rem;
        line-height: 1em;
        position: relative;
        top: ${0.5+props.index*3}rem;
        outline: 0;
        border: 0;
        color: #b6e8d7;
        font-size:0.75rem;
        text-align: center;
        height: 1.5em;
        opacity: .5;
        &:before {
            content: '';
            background: linear-gradient(to right, transparent, #b6e8d7, transparent);
            position: absolute;
            left: 0;
            top: 50%;
            width: 100%;
            height: 1px;
        }
        &:after {
            content: attr(data-content);
            position: relative;
            display: inline-block;
            color: black;
            padding: 0 .5em;
            line-height: 1.5em;
            color: #b6e8d7;
            background-color: #fcfcfa;
        }
    `}
`;
