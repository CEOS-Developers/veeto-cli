import React from 'react';
import styled from 'styled-components';

const Preview = (props) => {

    return (
                <Wrapper>
                    <Bold>날짜</Bold>
                    를 선택하기
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    width: fit-content;
    height: 2.7rem;
    font-family: NotoSansCJKKR;
    font-size: 1.8rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:2.1rem;
`
const Bold = styled.span`
    font-family: NotoSansCJKkr;
    font-weight: 500;
`

export default Preview