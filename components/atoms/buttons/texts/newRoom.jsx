import React from 'react';
import styled from 'styled-components';

const Enter = (props) => {

    return (
                <Wrapper>
                    <Text>
                        <div>찾는 방이 없다면?</div>
                        <div style={{  fontFamily: 'NotoSansCJKkr', fontWeight: '500', textDecoration:'underline'}}>방 만들기</div>
                    </Text>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    width: 23.4rem;
    height: 5.6rem;
    border-radius: 2.8rem;
    background-color: #61b28f;
    margin-bottom:4.4rem;
`
const Text = styled.div`
    width: fit-content;
    height: 3.9rem;
    font-family: NotoSansCJKKR;
    font-size: 1.4rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`

export default Enter