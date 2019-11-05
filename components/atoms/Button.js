import styled, { css } from 'styled-components';

export default styled.button`
    ${props => css`
        // font-size:${1 + props.level * 0.2}rem;
        // padding:${0.3 + props.level * 0.2}rem;
        // margin:${0.5 + props.level * 0.2}rem;
        // width:${props.width || ''}; //width 없다면 뒤에 거 쓰기
        // height:${props.height || ''};
        // color:${props.color};
        // background-color:${!props.outline ? props.backgroundColor : 'transparent'};
        // border : ${props.outline ? `0.1rem solid ${props.backgroundColor}` : 'none'};    
        display:inline-block;

        width:${props.width}rem;
        height:${props.height}rem;
        font-size:${props.size}rem;
        font-weight:${props.weight};
        text-align:${props.align};

        background-color:${props.bcolor};
        color:${props.color};

        line-height:${props.lineheight};

        border:${props.bord};
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
