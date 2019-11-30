import React from 'react';
import styled from 'styled-components';

const pwInput = (props) => {

    return (
                <PwInput type="password" name="id" placeholder="비밀번호"/>
    );
  }

const PwInput= styled.input`
    width: 81.6%;
    height: 3.5rem;
    border:none;
    border-radius: 2rem;
    background-color: #dbf2ea;

    opacity: 0.55;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;

    :focus{
        outline:none;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
      color: #2e9267;
    }
    :-ms-input-placeholder {
       color: #2e9267;
    }

    margin-bottom:2.7rem;
`

export default pwInput