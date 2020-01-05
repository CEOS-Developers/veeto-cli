import React from 'react';
import styled from 'styled-components';
import Logo from "../atoms/icons/logo";

const MainExplanation = (props) => {
    return (
        <MainExplanationWrapper tutorial={props.tutorial}>
            <ServicePhrase1>
                신촌에서 인생 친구를 찾다,
            </ServicePhrase1>
            <Logo style={{width:'41.6%', height:'4.4rem', marginBottom:'1.4rem'}}></Logo>
            <ServicePhrase2>
                방 선택, 약속 잡기, 만남.
            </ServicePhrase2>
            <ServicePhrase3>
                오직 세 단계로 당신의 인간관계를 비옥하게.
            </ServicePhrase3>
        </MainExplanationWrapper>
    );
  }

  const ServicePhrase1 = styled.div`
    width: fit-content;
    height: fit-content ;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:1.4rem;
`

const ServicePhrase2 = styled.div`
    font-size: 2.2rem;
    font-weight: bold;
    color: #2e9267;
    margin-bottom:0.2rem;
`
const ServicePhrase3 = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: center;
    color: #439f77;
`
const MainExplanationWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    height:fit-content;
    overflow:auto;
    margin-top:${props => props.tutorial ? '5.4rem' : '7.5rem'};
    margin-bottom:${props => props.tutorial ? '4.1rem' : '3.1rem'};
`
  
export default MainExplanation