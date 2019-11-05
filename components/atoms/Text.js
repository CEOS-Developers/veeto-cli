import styled, { css } from 'styled-components';

export default styled.div`
    ${props => css`
        display:inline-block;
        width:${props.width}rem;
        height:${props.height}rem;
        font-size:${props.size}rem;
        font-weight:${props.weight};
        background-color:${props.bcolor};
        color:${props.color};
        text-align:${props.align};
        line-height:${props.lineheight};
        border-radius:${props.bordr}rem;
        margin-top:${props.mtop}rem;
        padding:${props.padding}rem;
        position:${props.position};
        top:${props.top}rem;
        bottom:${props.bottom}rem;
        right:${props.right}rem;
        left:${props.left}rem;
    `}
`;
